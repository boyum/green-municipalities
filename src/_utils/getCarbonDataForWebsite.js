// @ts-check

/**
 *
 * @param {string} url
 * @returns {Promise<import('../../types').CarbonData>}
 *
 * @see https://api.websitecarbon.com/
 */
export default async function getCarbonDataForWebsite(url) {
  return (await fetch(`https://api.websitecarbon.com/site?url=${url}`)).json();
}
