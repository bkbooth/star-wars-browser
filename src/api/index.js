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
 * @param {string} [id]
 *
 * @returns {Promise}
 */
export function loadData(resource, id = null) {
  if (!VALID_RESOURCES.includes(resource)) {
    return Promise.reject(new Error(`Unknown API resource: ${resource}`))
  }

  let url = `${process.env.API_ROOT}/${resource}`
  if (id != null) url += `/${id}`

  return fetch(url).then(response => response.json())
}
