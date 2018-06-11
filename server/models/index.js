module.exports = (sequelize) => {
  // Import all models
  let Film = sequelize.import(`${__dirname}/film`)
  let Planet = sequelize.import(`${__dirname}/planet`)
  let Person = sequelize.import(`${__dirname}/person`)
  let Species = sequelize.import(`${__dirname}/species`)
  let Starship = sequelize.import(`${__dirname}/starship`)
  let Vehicle = sequelize.import(`${__dirname}/vehicle`)

  // Setup relationships
  Film.belongsToMany(Planet, { through: 'FilmPlanet' })
  Film.belongsToMany(Person, { as: 'characters', through: 'FilmPerson' })
  Film.belongsToMany(Species, { through: 'FilmSpecies' })
  Film.belongsToMany(Starship, { through: 'FilmStarship' })
  Film.belongsToMany(Vehicle, { through: 'FilmVehicle' })

  Planet.belongsToMany(Film, { through: 'FilmPlanet' })
  Planet.hasMany(Person, { as: 'residents' })

  Person.belongsToMany(Film, { through: 'FilmPerson' })
  Person.belongsTo(Planet, { as: 'homeworld' })
  Person.belongsToMany(Species, { through: 'PersonSpecies' })
  Person.belongsToMany(Starship, { through: 'StarshipPilot' })
  Person.belongsToMany(Vehicle, { through: 'VehiclePilot' })

  Species.belongsToMany(Film, { through: 'FilmSpecies' })
  Species.belongsTo(Planet, { as: 'homeworld' })
  Species.belongsToMany(Person, { as: 'people', through: 'PersonSpecies' })

  Starship.belongsToMany(Film, { through: 'FilmStarship' })
  Starship.belongsToMany(Person, { as: 'pilots', through: 'StarshipPilot' })

  Vehicle.belongsToMany(Film, { through: 'FilmVehicle' })
  Vehicle.belongsToMany(Person, { as: 'pilots', through: 'VehiclePilot' })

  return {
    Film,
    Person,
    Planet,
    Species,
    Starship,
    Vehicle,
  }
}
