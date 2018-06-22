import { buildOrderBy } from './build-order-by'
import { mergeQueryParams } from './merge-query-params'

const DEFAULT_OPTIONS = { defaultOrderField: 'name' }

/**
 * Returns the default list view methods
 *
 * @param {object} [options]
 * @param {string} [options.defaultOrderField='name']
 */
export function listViewMethods(options = {}) {
  options = Object.assign({}, DEFAULT_OPTIONS, options)

  return {
    /**
     * Sets the orderBy and clears the page query params
     *
     * @param {string} fieldName
     * @param {string} direction
     */
    onSetOrder(fieldName, direction) {
      let orderBy = buildOrderBy(fieldName, direction, options.defaultOrderField)
      let queryParams = { orderBy, page: undefined }
      this.$router.push({ query: mergeQueryParams(this.$route.query, queryParams) })
    },

    /**
     * Sets the pageSize and clears the page query params
     *
     * @param {number} pageSize
     */
    onSetPageSize(pageSize) {
      let queryParams = { pageSize, page: undefined }
      this.$router.push({ query: mergeQueryParams(this.$route.query, queryParams) })
    },

    /**
     * Sets the page query param
     *
     * @param {number} page
     */
    onSetPage(page) {
      let queryParams = { page }
      this.$router.push({ query: mergeQueryParams(this.$route.query, queryParams) })
    },
  }
}
