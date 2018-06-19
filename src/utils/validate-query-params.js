import isNumeric from '../utils/is-numeric'
import updateQueryParams from '../utils/update-query-params'

/**
 * Validate the page and pageSize query params are numeric
 *
 * @param {Route} to
 * @param {Route} from
 * @param {Function} next
 */
export default function validateQueryParams(to, from, next) {
  let query = to.query

  if (to.query.page != null && !isNumeric(to.query.page)) {
    query = updateQueryParams(query, { page: undefined })
  }
  if (to.query.pageSize != null && !isNumeric(to.query.pageSize)) {
    query = updateQueryParams(query, { pageSize: undefined })
  }

  if (query === to.query) next()
  else next(Object.assign({}, to, { query }))
}
