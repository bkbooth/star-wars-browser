const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const { getSwapiId } = require('../utils/swapi')

module.exports = (starship) => ({
  ...pick(starship, [
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
  slug: createSlug(starship.name),
  class: starship.starship_class,
  cost: starship.cost_in_credits,
  maxAtmospheringSpeed: starship.max_atmosphering_speed,
  hyperdriveRating: starship.hyperdrive_rating,
  megalights: starship.MGLT,
  cargoCapacity: starship.cargo_capacity,
  swapiId: getSwapiId(starship.url),
})
