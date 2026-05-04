const log = require('debug')('seed:load')

const API_ROOT = 'https://swapi.info/api'

/**
 * Iterates through a SWAPI resources pages to load all
 *
 * @param {string} resource
 *
 * @returns {Promise<Object[]>}
 */
module.exports = async function loadAll(resource) {
  let allResults = []
  let page = 0
  let hasNext = true
  while (hasNext) {
    log(`Downloading ${resource} page ${page + 1}...`)
    const response = await fetch(`${API_ROOT}/${resource}?page=${++page}`)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${resource} page ${page}: ${response.status} ${response.statusText}`,
      )
    }

    const body = await response.json()

    // swapi.info (current) returns the full collection as a JSON array
    if (Array.isArray(body)) {
      log(`Finished downloading ${body.length} ${resource} records`)
      return body
    }

    const { next, count, results } = body
    const pageResults = Array.isArray(results) ? results : []
    if (page === 1) log(`Expecting ${count} ${resource} records`)
    hasNext = next != null
    allResults = [...allResults, ...pageResults]
  }
  log(`Finished downloading ${allResults.length} ${resource} records`)
  return allResults
}
