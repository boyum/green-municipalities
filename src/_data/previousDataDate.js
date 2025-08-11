// @ts-check

import { readdirSync } from "node:fs";

export default function previousDataDate() {
  const dataDirectory = "data";
  const dataFiles = readdirSync(dataDirectory);
  const dataDates = dataFiles.map((file) => file.replace(".json", ""));
  const latestDate = dataDates.sort().reverse()[0];

  const latestDatePretty = new Date(latestDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return latestDatePretty;
}
