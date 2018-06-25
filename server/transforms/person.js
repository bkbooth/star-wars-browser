const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const getSwapiId = require('../utils/get-swapi-id')
const nullifyUnknown = require('../utils/nullify-unknown')
const parseBirthYear = require('../utils/parse-birth-year')

module.exports = (person) => nullifyUnknown({
  ...pick(person, [
    'name',
    'gender',
    'height',
    'created',
    'edited',
  ]),
  slug: createSlug(person.name),
  birthYear: parseBirthYear(person.birth_year),
  eyeColor: person.eye_color,
  hairColor: person.hair_color,
  skinColor: person.skin_color,
  mass: person.mass.replace(',', ''),
  swapiId: getSwapiId(person.url),
})
