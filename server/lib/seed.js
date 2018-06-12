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

  let allRecords
  try {
    console.log('Loading cached records...')
    allRecords = await require('./load-records')(recordTypes)
  } catch (err) {
    console.log('Failed loading cached records', err.message)
    allRecords = await require('./download-records')(recordTypes)
  }

  console.log('Transforming records...')
  let transformedRecords = await require('./transform-records')(allRecords)

  console.log('Inserting records into database...')
  let dbRecords = await require('./insert-records')(transformedRecords, models)

  console.log('All inserted?', Object.keys(dbRecords))
})()
