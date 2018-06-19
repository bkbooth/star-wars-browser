/**
 * Build an orderBy string
 *
 * @param {string} fieldName
 * @param {string} direction
 * @param {string} [defaultField='name']
 */
export default function buildOrderBy(fieldName, direction, defaultField = 'name') {
  let orderBy = `${direction === 'desc' ? '-' : ''}${fieldName}`
  if (fieldName !== defaultField) orderBy += `,${defaultField}`
  return orderBy
}
