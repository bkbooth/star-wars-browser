const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const getSwapiId = require('../utils/get-swapi-id')
const nullifyUnknown = require('../utils/nullify-unknown')

module.exports = (vehicle) => nullifyUnknown({
  ...pick(vehicle, [
    'name',
    'model',
    'manufacturer',
    'cost',
    'length',
    'crew',
    'passengers',
    'consumables',
    'created',
    'edited',
  ]),
  slug: createSlug(vehicle.name),
  class: vehicle.vehicle_class,
  cost: vehicle.cost_in_credits,
  maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
  cargoCapacity: vehicle.cargo_capacity.replace('none', '0'),
  swapiId: getSwapiId(vehicle.url),
})
