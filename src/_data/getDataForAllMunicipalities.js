// @ts-check

// const promiseRetry = require("promise-retry");
const allMunicipalities = require("../_utils/allMunicipalities");
const getCarbonDataForWebsite = require("../_utils/getCarbonDataForWebsite");

const html = String.raw;

module.exports = async function getDataForAllMunicipalities() {
  return (
    await Promise.all(
      allMunicipalities.map((municipality) => {
        return new Promise(async (resolve, reject) => {
          try {
            const data = await getCarbonDataForWebsite(municipality.url);
            resolve([municipality, data]);
            // resolve(
            //   await promiseRetry(async (retry, number) => {
            //     try {
            //       const data = await getCarbonDataForWebsite(municipality.url);
            //       resolve([municipality, data]);
            //     } catch (err) {
            //       if (err.code === "ETIMEDOUT") {
            //         retry(err);
            //       }

            //       throw err;
            //     }
            //   })
            // );
          } catch (error) {
            console.error(
              `Could not load data for ${municipality.name} kommune (${municipality.url})`
            );
            resolve(null);
          }
        });
      })
    )
  )
    .filter(Boolean)
    .filter(([m, data]) => {
      if (!data.statistics) {
        console.log(m.name + " is missing statistics", data);
      }
      return data.statistics;
    })
    .sort(
      ([, dataA], [, dataB]) =>
        (dataA.statistics.co2.grid.grams ?? 0) +
        (dataA.statistics.co2.grid.renewable ?? 0) -
        (dataB.statistics.co2.grid.grams ?? 0) +
        (dataB.statistics.co2.grid.renewable ?? 0)
    )
    .filter(Boolean)
    .map(([municipality, data], index) => {
      return html`<tr>
        <td>${index + 1}</td>
        <td><a href="${municipality.url}">${municipality.name}</a></td>
        <td>
          ${(
            (data.statistics.co2.grid.grams ?? 0) +
            (data.statistics.co2.grid.renewable ?? 0)
          ).toFixed(2)}g
        </td>
        <td>${data.statistics.green ? "Yes" : "No"}</td>
      </tr>`;
    });
};
