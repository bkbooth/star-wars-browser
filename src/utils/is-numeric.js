/**
 * Determines if the value is numeric
 *
 * @param {*} value
 *
 * @returns {boolean}
 */
export function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}
