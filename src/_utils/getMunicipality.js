// @ts-check

import allMunicipalities from "./allMunicipalities.js";

/**
 * @param {string} id
 * @returns {{ id: string; name: string; url: string; } | undefined}
 */
export default function getMunicipality(id) {
  return allMunicipalities.find(municipality => municipality.id === id);
}
