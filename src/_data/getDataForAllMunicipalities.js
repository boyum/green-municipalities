// @ts-check
import { existsSync, readFileSync, readdirSync } from "node:fs";

const today = new Date().toISOString().split("T")[0];
const getPath = (/** @type {string} */ isoDate) => `data/${isoDate}.json`;

const path = getPath(today);
const html = String.raw;

const getLatestDate = () => {
  const files = readdirSync("data").filter(file => file.endsWith(".json"));
  return files.sort().reverse()[0].replace(".json", "");
};

const latestDate = getLatestDate();

export default async function getDataForAllMunicipalities() {
  const trends = generateTrends();

  const globalMin = 0;
  let globalMax = 0;
  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.values(trends)
    .flatMap(municipality => municipality.map(({ value }) => value))
    .forEach(value => {
      if (value > globalMax) {
        globalMax = value;
      }
    });

  /** @type {import('../../types').MunicipalityData[]} */
  const data = existsSync(path)
    ? JSON.parse(readFileSync(path).toString("utf-8"))
    : JSON.parse(readFileSync(getPath(latestDate)).toString("utf-8"));

  return data
    .filter(data => !data.errored)
    .map((municipalityData, index) => {
      const trend = getTrend(trends, municipalityData.name);

      const lineGraphHtml = createChartString(trend, globalMin, globalMax);

      return html`<tr>
        <td>${index + 1}</td>
        <td><a href="${municipalityData.url}">${municipalityData.name}</a></td>
        <td>
          ${(municipalityData.statistics?.co2.renewable.grams ?? 0).toFixed(2)}g
          / ${(municipalityData.statistics?.co2.grid.grams ?? 0).toFixed(2)}g
        </td>
        <td>
          ${(
            ((municipalityData.statistics?.co2.grid.grams ?? 0) * 100) / 1.76
          ).toFixed(2)}%
        </td>
        <td>${((municipalityData.bytes ?? 0) / 1_000_000).toFixed(2)}MB</td>
        <td class="trend">${lineGraphHtml}</td>
      </tr>`;
    });
}

/**
 * @param {number[]} numbers
 * @param {number} n
 */
function medianEvery(numbers, n) {
  if (n <= 0) {
    return numbers;
  }

  const groups = [];
  while (numbers.length) {
    groups.push(numbers.splice(0, n));
  }

  return groups.map(group => {
    const sortedGroup = group.sort((a, b) => a - b);
    const middle = Math.floor(sortedGroup.length / 2);

    return sortedGroup.length % 2 !== 0
      ? sortedGroup[middle]
      : (sortedGroup[middle - 1] + sortedGroup[middle]) / 2;
  });
}

/**
 * @param {{ [name: string]: {timestamp: number; value: number}[]; }} trends
 * @param {string} name
 * @returns {number[]}
 */
function getTrend(trends, name) {
  const trend = (trends[name] || [])
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(({ value }) => value);

  // Decrease the trend resolution by getting the mean value of every 4 days
  return medianEvery(trend, 4);
}

/**
 * @param {Array<number>} numbers
 * @param {number} [globalMin]
 * @param {number} [globalMax]
 */
function createChartString(numbers, globalMin, globalMax) {
  const width = 600;
  const height = 300;

  const normalizedNumbers = normalizeNumberList(
    numbers,
    height,
    globalMin,
    globalMax,
  );

  const pathD = createPathD(normalizedNumbers, width, height);

  return html`
    <svg
      viewBox="0 0 ${width} ${height * 1.1}"
      stroke="currentcolor"
      stroke-width="${width / 100}"
      stroke-linejoin="round"
      preserveAspectRatio="meet"
      fill="none"
      width="${width}"
      height="${height}"
      style="height:auto"
    >
      <g transform="translate(0, ${height * 0.05})">
        <path d="${pathD}"></path>
      </g>
    </svg>
  `;
}

/**
 * Takes in a list of numbers and places all the numbers on a scale from 0 to 100.
 * The lowest value will become 0 and the highest will become <scalingFactor>.
 * Supports negative and positive integers.
 *
 * @param {Array<number>} numbers
 * @param {number} scalingFactorY
 * @param {number} [globalMin]
 * @param {number} [globalMax]
 */
function normalizeNumberList(numbers, scalingFactorY, globalMin, globalMax) {
  const min = Math.min(...numbers);
  const max = globalMax ?? Math.max(...numbers);
  const diff = max - min;

  return numbers
    .map(number => {
      const normalizedNumber =
        ((number - min) / (diff === 0 ? 1 : diff)) * scalingFactorY;

      return normalizedNumber;
    })
    .filter(number => !Number.isNaN(number));
}

/**
 * @param {Array<number>} numbers
 * @param {number} scalingFactorX
 * @param {number} scalingFactorY
 */
function createPathD(numbers, scalingFactorX, scalingFactorY) {
  const numberOfNumbers = numbers.length;

  const pathD = numbers.map((number, index) => {
    const isFirst = index === 0;

    const x = (index / (numberOfNumbers - 1)) * scalingFactorX;

    // Invert the number (or else the graph would be upside down)
    const y = scalingFactorY - number;

    const command = isFirst ? "M" : "L";

    return `${command}${x} ${y}`;
  });

  return ["M0 0", ...pathD].join(" ");
}

/**
 * Goes through each day and fetches the CO2e data for each municipality.
 * Stores the data in the trends array on the format:
 * { [municipalityName: string]: { timestamp: number; value: number; }[] }
 *
 * @returns {{ [municipalityName: string]: { timestamp: number; value: number; }[] }}
 */
function generateTrends() {
  /** @type {{ [municipalityName: string]: { timestamp: number; value: number; }[] }} */
  const trends = {};

  for (let i = 0; i < 500; i++) {
    const date = new Date(latestDate);
    date.setDate(date.getDate() - i);
    const isoDate = date.toISOString().split("T")[0];

    const path = getPath(isoDate);
    const dataExistsForSpecifiedDate = existsSync(path);
    if (!dataExistsForSpecifiedDate) {
      continue;
    }

    /** @type {import('../../types').MunicipalityData[]} */
    const data = JSON.parse(readFileSync(path).toString("utf-8"));

    for (const municipalityData of data) {
      if (!trends[municipalityData.name]) {
        trends[municipalityData.name] = [];
      }

      trends[municipalityData.name].push({
        timestamp: date.getTime(),
        value: municipalityData.statistics?.co2.renewable.grams ?? 0,
      });
    }
  }

  return trends;
}
