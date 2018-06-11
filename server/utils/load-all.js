const fetch = require('node-fetch')

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
    console.log(`Loading ${resource} page ${page + 1}...`)
    let response = await fetch(`${API_ROOT}/${resource}?page=${++page}`)
    let { next, count, results } = await response.json()
    if (page === 1) console.log(`Expecting ${count} ${resource} records`)
    hasNext = next != null
    allResults = [...allResults, ...results]
  }
  console.log(`Finished loading ${allResults.length} ${resource} records`)
  return allResults
}
