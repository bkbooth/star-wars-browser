const log = require('debug')('seed:associations')
const { getSwapiId } = require('../utils/swapi')

module.exports = (swapiPeople, { Person, Film, Planet, Species }) => {
  log('Associating people with homeworld (planet), films and species...')
  return Promise.all(swapiPeople.map(async function(swapiPerson) {
    let swapiId = getSwapiId(swapiPerson.url)
    let person = await Person.findOne({ where: { swapiId } })

    if (swapiPerson.homeworld != null) {
      let swapiId = getSwapiId(swapiPerson.homeworld)
      let planet = await Planet.findOne({ where: { swapiId } })
      await person.setHomeworld(planet)
    }

    let films = await Promise.all(
      swapiPerson.films
        .map(getSwapiId)
        .map(swapiId => Film.findOne({ where: { swapiId } }))
    )
    await person.addFilms(films)

    let species = await Promise.all(
      swapiPerson.species
        .map(getSwapiId)
        .map(swapiId => Species.findOne({ where: { swapiId } }))
    )
    await person.addSpecies(species)
  }))
}
