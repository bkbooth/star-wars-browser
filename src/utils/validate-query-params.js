import { isNumeric } from '../utils/is-numeric'
import { mergeQueryParams } from '../utils/merge-query-params'

/**
 * Validate the page and pageSize query params are numeric
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
export function validateQueryParams(to, from, next) {
  let query = to.query

  if (to.query.page != null && !isNumeric(to.query.page)) {
    query = mergeQueryParams(query, { page: undefined })
  }
  if (to.query.pageSize != null && !isNumeric(to.query.pageSize)) {
    query = mergeQueryParams(query, { pageSize: undefined })
  }

  if (query === to.query) next()
  else next(Object.assign({}, to, { query }))
}
