const pick = require('lodash/pick')
const { getSwapiId } = require('../utils/swapi')

module.exports = (species) => ({
  ...pick(species, ['name', 'classification', 'designation', 'language']),
  averageHeight: species.average_height,
  averageLifespan: species.average_lifespan,
  eyeColors: species.eye_colors,
  hairColors: species.hair_colors,
  skinColors: species.skin_colors,
  swapiId: getSwapiId(species.url),
})
