const VALID_RESOURCES = [
  'people',
  'planets',
  'films',
  'species',
  'vehicles',
  'starships',
]

/**
 * Get a resource from The Star Wars API
 *
 * @param {string} resource
 * @param {number} [page=1]
 *
 * @returns {Promise}
 */
export function loadData(resource, page = 1) {
  console.log('loadData', { resource, page })
  if (!VALID_RESOURCES.includes(resource)) {
    return Promise.reject(new Error(`Unknown API resource: ${resource}`))
  }

  return fetch(`${process.env.API_ROOT}/${resource}?page=${page}`)
    .then(response => response.json())
}
