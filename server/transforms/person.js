const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const nullifyUnknown = require('../utils/nullify-unknown')
const { getSwapiId } = require('../utils/swapi')

module.exports = (person) => nullifyUnknown({
  ...pick(person, [
    'name',
    'gender',
    'height',
    'mass',
    'created',
    'edited',
  ]),
  slug: createSlug(person.name),
  birthYear: person.birth_year,
  eyeColor: person.eye_color,
  hairColor: person.hair_color,
  skinColor: person.skin_color,
  swapiId: getSwapiId(person.url),
})
