/**
 * Builds a new query params object for the router by merging new params
 *
 * @param {Object} currentParams
 * @param {Object} newParams
 */
export function mergeQueryParams(currentParams, newParams) {
  return Object.assign({}, currentParams, newParams)
}
