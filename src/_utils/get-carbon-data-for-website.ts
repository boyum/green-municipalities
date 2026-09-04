import { co2, hosting } from "@tgwf/co2";
import type { CarbonData } from "../../types.ts";

/**
 * Sustainable Web Design Model v4 visitor assumptions. "Returning visitors"
 * only re-download a fraction of the page, so the average transfer per visit
 * is lower than the full page size.
 */
const VISIT_OPTIONS = {
  dataReloadRatio: 0.02,
  firstVisitPercentage: 0.75,
  returnVisitPercentage: 0.25,
} as const;

/**
 * Global average grid intensity (grams of CO2e per kWh) used by the Sustainable
 * Web Design Model v4. Because all segments in the model use this intensity,
 * energy (kWh) can be derived from the grid emissions.
 */
const GLOBAL_GRID_INTENSITY_G_PER_KWH = 494;

/**
 * Rough conversion from grams of CO2 to litres, matching the figure Website
 * Carbon has historically reported.
 */
const CO2_LITRES_PER_GRAM = 0.5562;

const REQUEST_TIMEOUT_MS = 10_000;

const MAX_ASSETS = 60;
const MAX_TOTAL_BYTES = 60 * 1024 * 1024;
const CONCURRENCY = 10;

/**
 * @see https://developers.thegreenwebfoundation.org/co2js/overview/
 * @see https://api.thegreenwebfoundation.org/
 */
export default async function getCarbonDataForWebsite(
  url: string,
): Promise<CarbonData> {
  const [measuredBytes, green] = await Promise.all([
    measureBytes(url),
    isGreenHosting(url),
  ]);

  const swd = new co2({ model: "swd", version: 4 });

  const gridGrams = swd.perVisitTrace(measuredBytes, false, VISIT_OPTIONS).co2;
  const renewableGrams = swd.perVisitTrace(
    measuredBytes,
    true,
    VISIT_OPTIONS,
  ).co2;

  const adjustedBytes =
    measuredBytes *
    (VISIT_OPTIONS.firstVisitPercentage +
      VISIT_OPTIONS.returnVisitPercentage * VISIT_OPTIONS.dataReloadRatio);

  return {
    url,
    bytes: measuredBytes,
    green,
    statistics: {
      adjustedBytes,
      energy: gridGrams / GLOBAL_GRID_INTENSITY_G_PER_KWH,
      co2: {
        grid: {
          grams: gridGrams,
          litres: gridGrams * CO2_LITRES_PER_GRAM,
        },
        renewable: {
          grams: renewableGrams,
          litres: renewableGrams * CO2_LITRES_PER_GRAM,
        },
      },
    },
  };
}

/**
 * Measure the transfer size (in bytes) of a page load by fetching the main
 * document and the assets it links to (stylesheets, scripts, images, etc).
 * Assets that fail to load are skipped.
 */
const measureBytes = async (url: string): Promise<number> => {
  const documentBuffer = await fetchBytes(url);
  const html = new TextDecoder().decode(documentBuffer);

  const assetUrls = extractAssetUrls(html, url);

  let totalBytes = documentBuffer.byteLength;

  await mapWithConcurrencyLimit(assetUrls, CONCURRENCY, async (assetUrl) => {
    if (totalBytes >= MAX_TOTAL_BYTES) {
      return;
    }

    try {
      totalBytes += (await fetchBytes(assetUrl)).byteLength;
    } catch {
      // Ignore assets that fail to load
    }
  });

  return totalBytes;
};

const fetchBytes = async (url: string): Promise<ArrayBuffer> => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(`Failed fetching ${url}: ${response.status}`);
  }
  return response.arrayBuffer();
};

const ASSET_ATTRIBUTE_REGEX =
  /\b(href|src|srcset|poster|data)=["']([^"']+)["']/gi;

/**
 * Extract asset URLs (stylesheets, scripts, images, fonts, etc.) from an HTML
 * document and resolve them against the page's base URL.
 */
const extractAssetUrls = (html: string, baseUrl: string): string[] => {
  const base = new URL(baseUrl);
  const urls = new Set<string>();

  for (const match of html.matchAll(ASSET_ATTRIBUTE_REGEX)) {
    const attribute = match[1].toLowerCase();
    const value = match[2].trim();

    const candidates =
      attribute === "srcset"
        ? value.split(",").map((entry) => entry.trim().split(/\s+/)[0] ?? "")
        : [value];

    for (const candidate of candidates) {
      if (!candidate || candidate.startsWith("#")) {
        continue;
      }

      let resolvedUrl: URL;
      try {
        resolvedUrl = new URL(candidate, base);
      } catch {
        // Some sites contain placeholder URLs (e.g. href="http://#") that do not parse
        continue;
      }

      if (
        resolvedUrl.protocol !== "http:" &&
        resolvedUrl.protocol !== "https:"
      ) {
        continue;
      }

      urls.add(resolvedUrl.toString());
    }
  }

  urls.delete(base.toString());

  return [...urls].slice(0, MAX_ASSETS);
};

const mapWithConcurrencyLimit = async <T>(
  items: T[],
  concurrency: number,
  mapper: (item: T) => Promise<void>,
): Promise<void> => {
  const queue = [...items];
  const workerCount = Math.min(concurrency, queue.length);
  const workers = Array.from({ length: workerCount }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (item !== undefined) {
        await mapper(item);
      }
    }
  });

  await Promise.all(workers);
};

const isGreenHosting = async (url: string): Promise<boolean> => {
  const domain = new URL(url).hostname;

  try {
    return await hosting(domain);
  } catch (error) {
    console.error(`Could not check green hosting for ${domain}: ${error}`);
    return false;
  }
};
