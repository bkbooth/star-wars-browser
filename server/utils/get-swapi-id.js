/**
 * Gets the SWAPI ID from a SWAPI URL (numeric id is the last path segment).
 * Supports both trailing-slash URLs (legacy SWAPI) and plain paths like …/films/1.
 *
 * @param {string|null|undefined} swapiUrl
 *
 * @returns {string|undefined}
 */
module.exports = function getSwapiId(swapiUrl) {
  if (swapiUrl == null || swapiUrl === '') return undefined
  const trimmed = String(swapiUrl).replace(/\/+$/, '')
  const segments = trimmed.split('/').filter(Boolean)
  return segments[segments.length - 1]
}
