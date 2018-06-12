(async function() {
  let {
    sequelize,
    Film,
    Planet,
    Species,
    Person,
    Starship,
    Vehicle,
  } = await require('./init-db')()

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
    allRecords = await require('./load-all-records')(recordTypes)
  } catch (err) {
    console.log('Failed loading cached records', err.message)
    allRecords = await require('./download-all-records')(recordTypes)
  }
  console.log('All records...', Object.keys(allRecords))
})()
