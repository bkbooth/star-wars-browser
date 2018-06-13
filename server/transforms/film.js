const pick = require('lodash/pick')
const createSlug = require('../utils/create-slug')
const { getSwapiId } = require('../utils/swapi')

module.exports = (film) => ({
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
