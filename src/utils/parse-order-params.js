/**
 * Parses an order params string into an array of fields and orders
 *
 *   parseOrderParams('name,-birthYear')
 *   {
 *     fields: ['name', 'birthYear'],
 *     orders: ['asc', 'desc'],
 *   }
 *
 * @param {string} orderParams
 *
 * @returns {object}
 */
export default function parseOrderParams(orderParams) {
  let orderParts = orderParams.split(',')
  let fields = orderParts.map(part => ['-', '+'].includes(part[0]) ? part.slice(1) : part)
  let orders = orderParts.map(part => part[0] === '-' ? 'desc' : 'asc')
  return { fields, orders }
}
