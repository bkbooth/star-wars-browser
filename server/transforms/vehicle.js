const pick = require('lodash/pick')
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
  class: vehicle.starship_class,
  cost: vehicle.cost_in_credits,
  maxAtmospheringSpeed: vehicle.max_atmosphering_speed,
  cargoCapacity: vehicle.cargo_capacity,
  swapiId: getSwapiId(vehicle.url),
})
