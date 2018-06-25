const reduce = require('lodash/reduce')

/**
 * Returns a clone of the object where any 'unknown' values are replaced with null
 *
 * @param {Object} obj
 *
 * @returns {Object}
 */
module.exports = function nullifyUnknown(obj) {
  return reduce(
    obj,
    (acc, value, key) => Object.assign(acc, { [key]: value === 'unknown' ? null : value }),
    {},
  )
}
