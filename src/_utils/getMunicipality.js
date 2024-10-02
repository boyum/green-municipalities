// @ts-check
import allMunicipalities from "./allMunicipalities.js";

/**
 * @param {string} id
 * @returns {import('../../types.js').Municipality | undefined}
 */
export default function getMunicipality(id) {
  return allMunicipalities.find(municipality => municipality.id === id);
}
