// @ts-check

const fs = require("fs");

const today = new Date().toISOString().split("T")[0];
const getPath = (/** @type {string} */ isoDate) => `data/${isoDate}.json`;

const path = getPath(today);
const html = String.raw;

module.exports = async function getDataForAllMunicipalities() {
  const fromFile = fs.existsSync(path)
    ? JSON.parse(fs.readFileSync(path).toString("utf-8"))
    : [];

  return fromFile[0]?.data.map((data, index) => {
    return html`<tr>
      <td>${index + 1}</td>
      <td><a href="${data.url}">${data.name}</a></td>
      <td>
        ${(data.statistics.co2.renewable.grams ?? 0).toFixed(2)}g /
        ${(data.statistics.co2.grid.grams ?? 0).toFixed(2)}g
      </td>
      <td>
        ${(((data.statistics.co2.grid.grams ?? 0) * 100) / 1.76).toFixed(2)}%
      </td>
      <td>${(data.bytes / 1_000_000).toFixed(2)}MB</td>
    </tr>`;
  });
};
