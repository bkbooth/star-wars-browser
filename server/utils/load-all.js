const fetch = require('node-fetch')
const log = require('debug')('seed:load')

const API_ROOT = 'https://swapi.co/api'

/**
 * Iterates through a SWAPI resources pages to load all
 *
 * @param {string} resource
 *
 * @returns {Object[]}
 */
module.exports = async function loadAll(resource) {
  let allResults = []
  let page = 0
  let hasNext = true
  while (hasNext) {
    log(`Downloading ${resource} page ${page + 1}...`)
    let response = await fetch(`${API_ROOT}/${resource}?page=${++page}`)
    let { next, count, results } = await response.json()
    if (page === 1) log(`Expecting ${count} ${resource} records`)
    hasNext = next != null
    allResults = [...allResults, ...results]
  }
  log(`Finished downloading ${allResults.length} ${resource} records`)
  return allResults
}
