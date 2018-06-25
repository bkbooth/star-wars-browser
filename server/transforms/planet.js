const first = require('lodash/first')
const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const getSwapiId = require('../utils/get-swapi-id')
const nullifyUnknown = require('../utils/nullify-unknown')

module.exports = (planet) => nullifyUnknown({
  ...pick(planet, [
    'name',
    'population',
    'climate',
    'terrain',
    'created',
    'edited',
  ]),
  slug: createSlug(planet.name),
  diameter: planet.diameter !== '0' ? planet.diameter : null,
  rotationPeriod: planet.rotation_period,
  orbitalPeriod: planet.orbital_period,
  gravity: first(/^\d+(\.\d+)?/.exec(planet.gravity)),
  surfaceWater: planet.surface_water,
  swapiId: getSwapiId(planet.url),
})
