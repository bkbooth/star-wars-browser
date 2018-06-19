/**
 * Builds a new query params object for the router by merging new params
 *
 * @param {Object} currentParams
 * @param {Object} newParams
 */
export default function updateQueryParams(currentParams, newParams) {
  return Object.assign({}, currentParams, newParams)
}
