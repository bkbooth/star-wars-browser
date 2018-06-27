/**
 * Checks if an input value is numeric
 *
 * @param {*} value
 *
 * @returns {boolean}
 */
module.exports = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}
