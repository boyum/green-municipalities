// @ts-check
import { existsSync, readFileSync } from "node:fs";

const today = new Date().toISOString().split("T")[0];
const getPath = (/** @type {string} */ isoDate) => `data/${isoDate}.json`;

const path = getPath(today);
const html = String.raw;

const latestDate = "2023-12-26";

export default async function getDataForAllMunicipalities() {
  const trends = generateTrends();

  const data = existsSync(path)
    ? JSON.parse(readFileSync(path).toString("utf-8"))
    : JSON.parse(readFileSync(getPath(latestDate)).toString("utf-8"));

  return data.map(
    (
      /** @type {{ url: string; name: string; statistics: { co2: { renewable: { grams: number; }; grid: { grams: number; }; }; }; bytes: number; }} */ municipalityData,
      /** @type {number} */ index,
    ) => {
      const trend = getTrend(trends, municipalityData.name);

      const lineGraphHtml = createChartString(trend);

      return html`<tr>
        <td>${index + 1}</td>
        <td><a href="${municipalityData.url}">${municipalityData.name}</a></td>
        <td>
          ${(municipalityData.statistics.co2.renewable.grams ?? 0).toFixed(2)}g
          / ${(municipalityData.statistics.co2.grid.grams ?? 0).toFixed(2)}g
        </td>
        <td>
          ${(
            ((municipalityData.statistics.co2.grid.grams ?? 0) * 100) /
            1.76
          ).toFixed(2)}%
        </td>
        <td>${(municipalityData.bytes / 1_000_000).toFixed(2)}MB</td>
        <td class="trend">${lineGraphHtml}</td>
      </tr>`;
    },
  );
}

/**
 * @param {{ [name: string]: {timestamp: number; value: number}[]; }} trends
 * @param {string} name
 * @returns {number[]}
 */
function getTrend(trends, /** @type {string} */ name) {
  const trend = (trends[name] || [])
    .sort((a, b) => a.timestamp - b.timestamp)
    .map(({ value }) => value);

  if (name === "Elverum") {
    console.log(trend);
  }

  return trend;
}

/**
 * @param {Array<number>} numbers
 */
function createChart(numbers) {
  const width = 600;
  const height = 50;

  const normalizedNumbers = normalizeNumberList(numbers, height);

  const svg = initSvg(width, height);

  const group = createSVGNSElement("g");
  group.setAttribute("transform", `translate(0, ${height * 0.05})`);

  const pathD = createPathD(normalizedNumbers, width, height);
  const path = initPath(pathD);

  group.appendChild(path);
  svg.appendChild(group);

  return svg;
}

/**
 * @param {Array<number>} numbers
 */
function createChartString(numbers) {
  const width = 600;
  const height = 300;

  const normalizedNumbers = normalizeNumberList(numbers, height);

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
 * @template {keyof SVGElementTagNameMap} TElementName
 * @param {TElementName} elementName
 * @returns {SVGElementTagNameMap[TElementName]}
 */
function createSVGNSElement(elementName) {
  return document.createElementNS("http://www.w3.org/2000/svg", elementName);
}

/**
 * @param { number} width
 * @param { number} height
 */
function initSvg(width, height) {
  const svg = createSVGNSElement("svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height * 1.1}`);
  svg.setAttribute("stroke", "black");
  svg.setAttribute("stroke-width", (width / 100).toString());
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("preserveAspectRatio", "meet");
  svg.setAttribute("fill", "none");

  svg.setAttribute("width", width.toString());
  svg.setAttribute("height", height.toString());

  return svg;
}

/**
 * @param {string} d
 */
function initPath(d) {
  const path = createSVGNSElement("path");
  path.setAttribute("d", d);

  return path;
}

/**
 * Takes in a list of numbers and places all the numbers on a scale from 0 to 100.
 * The lowest value will become 0 and the highest will become <scalingFactor>.
 * Supports negative and positive integers.
 *
 * @param {Array<number>} numbers
 * @param {number} scalingFactorY
 */
function normalizeNumberList(numbers, scalingFactorY) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const diff = max - min;

  return numbers
    .map(number => {
      const normalizedNumber =
        ((number - min) / (diff === 0 ? 1 : diff)) * scalingFactorY;

      if (Number.isNaN(normalizedNumber)) {
        console.log({ number, min, max, diff });
      }

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

  for (let i = 0; i < 365; i++) {
    const lastDataDate = "2023-12-26";
    const date = new Date(lastDataDate);
    date.setDate(date.getDate() - i);
    const isoDate = date.toISOString().split("T")[0];

    const path = getPath(isoDate);
    const dataExistsForSpecifiedDate = existsSync(path);
    if (!dataExistsForSpecifiedDate) {
      continue;
    }

    const data = JSON.parse(readFileSync(path).toString("utf-8"));

    for (const municipalityData of data) {
      if (!trends[municipalityData.name]) {
        trends[municipalityData.name] = [];
      }

      trends[municipalityData.name].push({
        timestamp: date.getTime(),
        value: municipalityData.statistics.co2.renewable.grams,
      });
    }
  }

  return trends;
}
