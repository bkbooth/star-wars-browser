const pick = require('lodash/pick')
const { getSwapiId } = require('../utils/swapi')

module.exports = (planet) => ({
  ...pick(planet, [
    'name',
    'diameter',
    'gravity',
    'population',
    'climate',
    'terrain',
    'created',
    'edited',
  ]),
  rotationPeriod: planet.rotation_period,
  orbitalPeriod: planet.orbital_period,
  surfaceWater: planet.surface_water,
  swapiId: getSwapiId(planet.url),
})
