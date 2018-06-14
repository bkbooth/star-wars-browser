/**
 * Maps an array of resource objects to an object with named resources
 *
 * @param {object[]} resources
 *
 * @returns {object}
 */
module.exports = ([films, planets, species, people, starships, vehicles]) =>
  ({ films, planets, species, people, starships, vehicles })
