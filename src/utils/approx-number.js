/**
 * Rounds and formats a number to the nearest trillions, billions, millions or thousands
 *
 * @param {number} inputValue
 *
 * @returns {string}
 */
export function approxNumber(inputValue) {
  let { value, suffix } = getValueAndSuffix(inputValue)
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 }) + suffix
}

/**
 * Gets the value and suffix of a number when transformed to trillions, billions, millions or thousands
 *
 * @param {number} value
 *
 * @returns {object}
 */
function getValueAndSuffix(value) {
  if (value / 1000000000000 >= 1) return { value: value / 1000000000000, suffix: 'T' }
  if (value / 1000000000 >= 1) return { value: value / 1000000000, suffix: 'B' }
  if (value / 1000000 >= 1) return { value: value / 1000000, suffix: 'M' }
  if (value / 1000 >= 1) return { value: value / 1000, suffix: 'K' }
  return { value, suffix: '' }
}
