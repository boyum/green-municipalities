// @ts-check

/**
 * @typedef {{
 *   url: string;
 *   green: boolean | "unknown";
 *   bytes: number;
 *   cleanerThan: number;
 *   statistics: {
 *     adjustedBytes: number;
 *     energy: number;
 *     co2: {
 *       grams: number;
 *       litres: number;
 *     }
 *   }
 * }} CarbonData
 */

/**
 *
 * @param {string} url
 * @returns {Promise<CarbonData>}
 *
 * @see https://api.websitecarbon.com/
 */
export default async function getCarbonDataForWebsite(url) {
  return (await fetch(`https://api.websitecarbon.com/site?url=${url}`)).json();
}
