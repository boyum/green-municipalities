import type { CarbonData } from "../../types.ts";

/**
 * @see https://api.websitecarbon.com/
 */
export default async function getCarbonDataForWebsite(url: string) {
  const response = await fetch(`https://api.websitecarbon.com/site?url=${url}`);
  const body = await response.text();

  let carbonData: CarbonData;

  try {
    carbonData = JSON.parse(body) as CarbonData;
  } catch (error) {
    console.log(body);
    throw error;
  }

  return carbonData;
}
