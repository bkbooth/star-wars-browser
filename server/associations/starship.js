const log = require('debug')('seed:associations')
const { getSwapiId } = require('../utils/swapi')

module.exports = (swapiStarships, { Starship, Film, Person }) => {
  log('Associating starships with films and pilots (people)...')
  return Promise.all(swapiStarships.map(async function(swapiStarship) {
    let swapiId = getSwapiId(swapiStarship.url)
    let starship = await Starship.findOne({ where: { swapiId } })

    let films = await Promise.all(
      swapiStarship.films
        .map(getSwapiId)
        .map(swapiId => Film.findOne({ where: { swapiId } }))
    )
    await starship.addFilms(films)

    let pilots = await Promise.all(
      swapiStarship.pilots
        .map(getSwapiId)
        .map(swapiId => Person.findOne({ where: { swapiId } }))
    )
    await starship.addPilots(pilots)
  }))
}
