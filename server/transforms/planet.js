const first = require('lodash/first')
const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const { getSwapiId } = require('../utils/swapi')

module.exports = (planet) => ({
  ...pick(planet, [
    'name',
    'diameter',
    'population',
    'climate',
    'terrain',
    'created',
    'edited',
  ]),
  slug: createSlug(planet.name),
  rotationPeriod: planet.rotation_period,
  orbitalPeriod: planet.orbital_period,
  gravity: first(/^\d+(\.\d+)?/.exec(planet.gravity)),
  surfaceWater: planet.surface_water,
  swapiId: getSwapiId(planet.url),
})
