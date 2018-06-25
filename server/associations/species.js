const log = require('debug')('seed:associations')
const getSwapiId = require('../utils/get-swapi-id')

module.exports = (swapiSpecies, { Species, Film, Planet }) => {
  log('Associating species with homeworld (planet) and films...')
  return Promise.all(swapiSpecies.map(async function(swapiSpecies) {
    let swapiId = getSwapiId(swapiSpecies.url)
    let species = await Species.findOne({ where: { swapiId } })

    if (swapiSpecies.homeworld != null) {
      let swapiId = getSwapiId(swapiSpecies.homeworld)
      let planet = await Planet.findOne({ where: { swapiId } })
      await species.setHomeworld(planet)
    }

    let films = await Promise.all(
      swapiSpecies.films
        .map(getSwapiId)
        .map(swapiId => Film.findOne({ where: { swapiId } }))
    )
    await species.addFilms(films)
  }))
}
