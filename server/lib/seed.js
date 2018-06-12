(async function() {
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
    console.log('Loading cached records...')
    swapiRecords = await require('./load-records')(recordTypes)
  } catch (err) {
    console.log('Failed loading cached records', err.message)
    swapiRecords = await require('./download-records')(recordTypes)
  }

  console.log('Transforming records...')
  let transformedRecords = await require('./transform-records')(swapiRecords)

  console.log('Inserting records into database...')
  await require('./insert-records')(transformedRecords, models)

  console.log('Adding all associations...')
  await require('./add-associations')(swapiRecords, models)
})()
