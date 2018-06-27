const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const getSwapiId = require('../utils/get-swapi-id')
const nullifyUnknown = require('../utils/nullify-unknown')

module.exports = (starship) => nullifyUnknown({
  ...pick(starship, [
    'name',
    'model',
    'manufacturer',
    'cost',
    'crew',
    'passengers',
    'consumables',
    'created',
    'edited',
  ]),
  slug: createSlug(starship.name),
  class: starship.starship_class,
  cost: starship.cost_in_credits,
  length: starship.length.replace(',', ''),
  maxAtmospheringSpeed: starship.max_atmosphering_speed.replace('km', '').replace('n/a', 'unknown'),
  hyperdriveRating: starship.hyperdrive_rating,
  megalights: starship.MGLT,
  cargoCapacity: starship.cargo_capacity,
  swapiId: getSwapiId(starship.url),
})
