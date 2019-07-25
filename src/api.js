import qs from 'querystring'

const VALID_RESOURCES = [
  'films',
  'planets',
  'species',
  'people',
  'starships',
  'vehicles',
]

/**
 * Load a resource from the API (using data from The Star Wars API)
 *
 * @param {string} resource
 * @param {Object} [query]
 * @param {string} [query.slug]
 *
 * @returns {Promise}
 */
export function loadData(resource, query = {}) {
  if (!VALID_RESOURCES.includes(resource)) {
    return Promise.reject(new Error(`Unknown API resource: ${resource}`))
  }

  let url = `${process.env.VUE_APP_API_ROOT}/${resource}`
  let queryString = qs.stringify(query)
  if (queryString) url += `?${queryString}`

  return fetch(url)
    .then(response => response.json())
    .then(results => query.slug ? results[0] : results)
}
