const fs = require('fs')
const path = require('path')
const objectify = require('../../utils/objectify')

const BASE_PATH = path.join(__dirname, '..', '..', 'data')

module.exports = (recordTypes) =>
  Promise.all(recordTypes.map(loadRecords))
    .then(objectify)

/**
 * Reads all records of a type from a local JSON file
 *
 * @param {string} recordType
 *
 * @returns {Promise<Object[]>}
 */
function loadRecords(recordType) {
  return new Promise((resolve, reject) =>
    fs.readFile(path.join(BASE_PATH, `${recordType}.json`), (err, data) => {
      if (err) reject(err)
      else resolve(JSON.parse(data))
    }))
}
