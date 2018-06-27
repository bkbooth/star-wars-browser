const log = require('debug')('seed:associations')
const getSwapiId = require('../utils/get-swapi-id')

module.exports = (swapiVehicles, { Vehicle, Film, Person }) => {
  log('Associating vehicles with films and pilots (people)...')
  return Promise.all(swapiVehicles.map(async function(swapiVehicle) {
    let swapiId = getSwapiId(swapiVehicle.url)
    let vehicle = await Vehicle.findOne({ where: { swapiId } })

    let films = await Promise.all(
      swapiVehicle.films
        .map(getSwapiId)
        .map(swapiId => Film.findOne({ where: { swapiId } }))
    )
    await vehicle.addFilms(films)

    let pilots = await Promise.all(
      swapiVehicle.pilots
        .map(getSwapiId)
        .map(swapiId => Person.findOne({ where: { swapiId } }))
    )
    await vehicle.addPilots(pilots)
  }))
}
