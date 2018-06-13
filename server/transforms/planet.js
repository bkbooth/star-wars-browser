const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
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
  slug: createSlug(planet.name),
  rotationPeriod: planet.rotation_period,
  orbitalPeriod: planet.orbital_period,
  surfaceWater: planet.surface_water,
  swapiId: getSwapiId(planet.url),
})
