// @ts-check

/**
 *
 * @param {string} url
 * @returns {Promise<{
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
 * }>}
 *
 * @see https://api.websitecarbon.com/
 */
module.exports = async function getCarbonDataForWebsite(url) {
  const fetch = (await import("node-fetch")).default;
  return (await fetch(`https://api.websitecarbon.com/site?url=${url}`)).json();
};
