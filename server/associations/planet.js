const log = require('debug')('seed:associations')
const { getSwapiId } = require('../utils/swapi')

module.exports = (swapiPlanets, { Planet, Film }) => {
  log('Associating planets with films...')
  return Promise.all(swapiPlanets.map(async function(swapiPlanet) {
    let swapiId = getSwapiId(swapiPlanet.url)
    let planet = await Planet.findOne({ where: { swapiId } })

    let films = await Promise.all(
      swapiPlanet.films
        .map(getSwapiId)
        .map(swapiId => Film.findOne({ where: { swapiId } }))
    )
    await planet.addFilms(films)
  }))
}
