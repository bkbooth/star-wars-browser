const log = require('debug')('seed:main')

;(async function() {
  let models = await require('./init-db')()

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
    swapiRecords = await require('./load-records')(recordTypes)
  } catch (err) {
    log('Failed loading cached records', err.message)
    swapiRecords = await require('./download-records')(recordTypes)
  }

  log('Transforming records...')
  let transformedRecords = await require('./transform-records')(swapiRecords)

  log('Inserting records into database...')
  await require('./insert-records')(transformedRecords, models)

  log('Adding all associations...')
  await require('./add-associations')(swapiRecords, models)
})()
