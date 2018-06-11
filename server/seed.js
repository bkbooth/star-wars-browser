const Sequelize = require('sequelize')
const loadAll = require('./utils/load-all')

// Setup the Sequelize database
let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
})
let {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} = require('./models')(sequelize)
let transforms = require('./transforms')

// Load and parse each of the resources
sequelize
  .sync({ force: true, logging: false })
  .then(() => Promise.all([
    loadAll('films'),
    loadAll('planets'),
    loadAll('species'),
    loadAll('people'),
    loadAll('starships'),
    loadAll('vehicles'),
  ]))
  .then(([films, planets, species, people, starships, vehicles]) => ({
    films: films.map(transforms.film),
    planets: planets.map(transforms.planet),
    species: species.map(transforms.species),
    people: people.map(transforms.person),
    starships: starships.map(transforms.starship),
    vehicles: vehicles.map(transforms.vehicle),
  }))
  .then(({ films, planets, species, people, starships, vehicles }) => {
    return Promise.all([
      Film.bulkCreate(films, { logging: false }),
      Planet.bulkCreate(planets, { logging: false }),
      Species.bulkCreate(species, { logging: false }),
      Person.bulkCreate(people, { logging: false }),
      Starship.bulkCreate(starships, { logging: false }),
      Vehicle.bulkCreate(vehicles, { logging: false }),
    ])
  })
