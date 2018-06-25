const objectify = require('../../utils/objectify')

module.exports = (
  { films, planets, species, people, starships, vehicles },
  { Film, Planet, Species, Person, Starship, Vehicle }
) =>
  Promise.all([
    Film.bulkCreate(films),
    Planet.bulkCreate(planets),
    Species.bulkCreate(species),
    Person.bulkCreate(people),
    Starship.bulkCreate(starships),
    Vehicle.bulkCreate(vehicles),
  ]).then(objectify)
