const reduce = require('lodash/reduce')

module.exports = obj => reduce(
  obj,
  (acc, value, key) => Object.assign(acc, { [key]: value === 'unknown' ? null : value }),
  {},
)
