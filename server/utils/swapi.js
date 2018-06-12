const nth = require('lodash/nth')

/**
 * Gets the SWAPI ID from a SWAPI URL
 *
 * @param {string} swapiUrl
 *
 * @returns {string}
 */
function getSwapiId(swapiUrl) {
  return nth(swapiUrl.split('/'), -2)
}

module.exports = {
  getSwapiId,
}
