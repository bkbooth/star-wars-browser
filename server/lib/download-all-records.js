const fs = require('fs')
const path = require('path')
const loadAll = require('../utils/load-all')

const BASE_PATH = path.join(__dirname, '..', 'data')

module.exports = (recordTypes) =>
  Promise.all(recordTypes.map(recordType =>
    loadAll(recordType)
      .then(records => saveRecords(recordType, records))))
    .then(([films, planets, species, people, starships, vehicles]) =>
      ({ films, planets, species, people, starships, vehicles }))

/**
 * Saves all records of a type to a local JSON file
 *
 * @param {string} recordType
 * @param {Object[]} records
 *
 * @returns {Promise}
 */
function saveRecords(recordType, records) {
  return new Promise((resolve, reject) =>
    fs.writeFile(path.join(BASE_PATH, `${recordType}.json`), JSON.stringify(records), (err) => {
      if (err) reject(err)
      else resolve(records)
    }))
}
