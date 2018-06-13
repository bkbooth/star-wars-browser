const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const { getSwapiId } = require('../utils/swapi')

module.exports = (vehicle) => ({
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
  cargoCapacity: vehicle.cargo_capacity,
  swapiId: getSwapiId(vehicle.url),
})
