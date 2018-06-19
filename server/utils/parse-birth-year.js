/**
 * Parses a birth year in BBY or ABY format into a float
 *
 * parseBirthYear('45.2BBY')
 * -45.2
 *
 * @param {string} birthYear
 *
 * @returns {number}
 */
module.exports = birthYear => {
  if (birthYear == null || birthYear === '' || birthYear === 'unknown') return null

  let value = parseFloat(birthYear)
  return birthYear.includes('BBY') ? -value : value
}
