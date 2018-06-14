const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const nullifyUnknown = require('../utils/nullify-unknown')
const { getSwapiId } = require('../utils/swapi')

module.exports = (film) => nullifyUnknown({
  ...pick(film, [
    'title',
    'director',
    'producer',
    'created',
    'edited',
  ]),
  slug: createSlug(`${film.episode_id} ${film.title}`),
  episodeId: film.episode_id,
  openingCrawl: film.opening_crawl,
  releaseDate: film.release_date,
  swapiId: getSwapiId(film.url),
})
