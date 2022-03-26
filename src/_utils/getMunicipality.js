const getAllMunicipalities = require("./allMunicipalities");

/**
 *
 * @param {string} id
 * @returns {{ id: string; name: string; url: string; } | null}
 */
module.exports = function getMunicipality(id) {
  return getAllMunicipalities().find((municipality) => municipality.id === id);
};
