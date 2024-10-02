// @ts-check
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import allMunicipalities from "./allMunicipalities.js";
import getCarbonDataForWebsite from "./getCarbonDataForWebsite.js";

const getPath = (/** @type {string} */ isoDate) => `data/${isoDate}.json`;
const getNewestFile = () => {
  const files = readdirSync("data").filter(file => file.endsWith(".json"));
  return files.sort().reverse()[0];
};

const fetchDataForAllMunicipalities = async () => {
  const newData = await Promise.all(
    allMunicipalities.map(municipality => {
      // biome-ignore lint/suspicious/noAsyncPromiseExecutor: <explanation>
      return new Promise(async resolve => {
        try {
          const data = await getCarbonDataForWebsite(municipality.url);
          resolve({ ...data, ...municipality });
        } catch (error) {
          console.error(
            `Could not load data for ${municipality.name} kommune (${municipality.url})`,
          );
          resolve(municipality);
        }
      });
    }),
  );

  return newData.filter(Boolean).filter(data => {
    if (!data.statistics) {
      console.warn(
        `${data.name} [${data.id}] is missing statistics: ${data.url}`,
      );
    }
    return data.statistics;
  });
};

/**
 * Merge data so that the latest version always contains as much data as possible.
 * If a municipality has no data, it will be fallback to the most recent previous data.
 *
 * @param newData
 * @param existingData
 * @returns {{statistics: import('../../types.js').Statistics}[]}
 */
const mergeMunicipalitiesData = (newData, existingData) => {
  return allMunicipalities
    .map(municipality => {
      const existingInNew = newData.find(
        data => municipality.id === data.id && data.statistics,
      );
      if (existingInNew) {
        return existingInNew;
      }
      let foundInExisting;
      for (
        let dataSetIdx = 0;
        dataSetIdx < existingData.length && !foundInExisting;
        dataSetIdx++
      ) {
        const dataSetData = existingData[dataSetIdx].data;
        for (
          let dataSetDataInnerIdx = 0;
          dataSetDataInnerIdx < dataSetData.length && !foundInExisting;
          dataSetDataInnerIdx++
        ) {
          const d = dataSetData[dataSetDataInnerIdx];
          if (municipality.id === d.id && d.statistics) {
            foundInExisting = d;
          }
        }
      }
      return foundInExisting;
    })
    .filter(Boolean);
};

const getISODate = (/** @type {Date} */ date) =>
  date.toISOString().split("T")[0];

const run = async () => {
  const today = new Date();

  const todayISO = getISODate(today);

  const path = getPath(todayISO);

  const previousFile = getPath(getNewestFile());
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
      (dataA.statistics.co2.grid.grams ?? 0) -
      (dataB.statistics.co2.grid.grams ?? 0),
  );

  const data = [...sortedData, ...previousData];
  writeFileSync(path, JSON.stringify(data, null));
};

run();
