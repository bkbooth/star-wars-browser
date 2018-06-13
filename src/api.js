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
 * @param {string} [slug]
 *
 * @returns {Promise}
 */
export function loadData(resource, slug = null) {
  if (!VALID_RESOURCES.includes(resource)) {
    return Promise.reject(new Error(`Unknown API resource: ${resource}`))
  }

  let url = `${process.env.API_ROOT}/${resource}`
  if (slug != null) url += `?slug=${slug}`

  return fetch(url)
    .then(response => response.json())
    .then(results => slug == null ? results : results[0])
}
