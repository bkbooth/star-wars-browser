/**
 * Maps an array of resource objects to an object with named resources
 *
 * @param {Object[]} resources
 *
 * @returns {Object}
 */
module.exports = function objectify([films, planets, species, people, starships, vehicles]) {
  return { films, planets, species, people, starships, vehicles }
}
