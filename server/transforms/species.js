const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const nullifyUnknown = require('../utils/nullify-unknown')
const { getSwapiId } = require('../utils/swapi')

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
  averageHeight: species.average_height,
  averageLifespan: species.average_lifespan,
  eyeColors: species.eye_colors,
  hairColors: species.hair_colors,
  skinColors: species.skin_colors,
  swapiId: getSwapiId(species.url),
})
