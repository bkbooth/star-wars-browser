const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const getSwapiId = require('../utils/get-swapi-id')
const isNumeric = require('../utils/is-numeric')
const nullifyUnknown = require('../utils/nullify-unknown')

module.exports = (species) => nullifyUnknown({
  ...pick(species, [
    'name',
    'classification',
    'designation',
    'language',
    'created',
    'edited',
  ]),
  slug: createSlug(species.name),
  averageHeight: isNumeric(species.average_height) ? species.average_height : null,
  averageLifespan: isNumeric(species.average_lifespan) ? species.average_lifespan : null,
  eyeColors: species.eye_colors,
  hairColors: species.hair_colors,
  skinColors: species.skin_colors,
  swapiId: getSwapiId(species.url),
})
