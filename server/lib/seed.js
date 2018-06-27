const log = require('debug')('seed:main')

;(async function() {
  let models = await require('./seed/init-db')()

  const recordTypes = [
    'films',
    'planets',
    'species',
    'people',
    'starships',
    'vehicles',
  ]

  let swapiRecords
  try {
    log('Loading cached records...')
    swapiRecords = await require('./seed/load-records')(recordTypes)
  } catch (err) {
    log('Failed loading cached records', err.message)
    swapiRecords = await require('./seed/download-records')(recordTypes)
  }

  log('Transforming records...')
  let transformedRecords = await require('./seed/transform-records')(swapiRecords)

  log('Inserting records into database...')
  await require('./seed/insert-records')(transformedRecords, models)

  log('Adding all associations...')
  await require('./seed/add-associations')(swapiRecords, models)
})()
