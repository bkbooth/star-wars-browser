const pick = require('lodash/pick')
const { getSwapiId } = require('../utils/swapi')

module.exports = (film) => ({
  ...pick(film, [
    'title',
    'director',
    'producer',
    'created',
    'edited',
  ]),
  episodeId: film.episode_id,
  openingCrawl: film.opening_crawl,
  releaseDate: film.release_date,
  swapiId: getSwapiId(film.url),
})
