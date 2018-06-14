const transforms = require('../transforms')

module.exports = ({ films, planets, species, people, starships, vehicles }) =>
  Promise.resolve({
    films: films.map(transforms.film),
    planets: planets.map(transforms.planet).filter(obj => obj.slug != null),
    species: species.map(transforms.species),
    people: people.map(transforms.person),
    starships: starships.map(transforms.starship),
    vehicles: vehicles.map(transforms.vehicle),
  })
