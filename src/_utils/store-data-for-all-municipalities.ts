import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { MunicipalityData } from "../../types.js";
import allMunicipalities from "./all-municipalities.ts";
import getCarbonDataForWebsite from "./get-carbon-data-for-website.ts";

const getPath = (isoDate: string) => `data/${isoDate}.json`;
const getNewestFile = () => {
  const files = readdirSync("data").filter(file => file.endsWith(".json"));
  return files.sort().reverse()[0];
};

/**
 * @returns {Promise<import('../../types.js').MunicipalityData[]>}
 */
const fetchDataForAllMunicipalities = async () => {
  return await Promise.all(
    allMunicipalities.map(async municipality => {
      try {
        const data = await getCarbonDataForWebsite(municipality.url);
        return { ...data, ...municipality };
      } catch (error) {
        const errorMessage =
          // @ts-expect-error
          "message" in error ? error.message : error.toString();

        console.error(
          `Could not load data for ${municipality.name} kommune (${municipality.url}): ${errorMessage}`,
        );

        return { ...municipality };
      }
    }),
  );
};

/**
 * Merge data so that the latest version always contains as much data as possible.
 * If a municipality has no data, it will be fallback to the most recent previous data.
 */
const mergeMunicipalitiesData = (
  newData: MunicipalityData[],
  previousData: MunicipalityData[],
): MunicipalityData[] => {
  return allMunicipalities.map(municipality => {
    const existsInNew = newData.find(
      data => municipality.id === data.id && data.statistics,
    );

    if (existsInNew) {
      return existsInNew;
    }

    console.info(`Could not find new data for ${municipality.name}`);

    const existsInPrevious = previousData.find(
      data => municipality.id === data.id && data.statistics,
    );

    if (existsInPrevious) {
      return existsInPrevious;
    }

    console.info(`Could not find previous data for ${municipality.name}\n`);

    return { ...municipality, errored: true };
  });
};

const getISODate = (date: Date) => date.toISOString().split("T")[0];

const run = async () => {
  const today = new Date();
  const todayISO = getISODate(today);
  const path = getPath(todayISO);

  const previousFile = join("data", getNewestFile());
  const previousData = existsSync(previousFile)
    ? JSON.parse(readFileSync(previousFile).toString("utf-8"))
    : [];

  const newData = await fetchDataForAllMunicipalities();
  if (newData?.length === 1) {
    throw new Error("No new data found for any municipality");
  }

  const mergedData = mergeMunicipalitiesData(newData, previousData);
  const sortedData = mergedData.sort(
    (dataA, dataB) =>
      (dataA.statistics?.co2.grid.grams ?? 0) -
      (dataB.statistics?.co2.grid.grams ?? 0),
  );

  writeFileSync(path, JSON.stringify(sortedData, null));
};

run();
