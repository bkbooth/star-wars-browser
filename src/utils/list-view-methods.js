import { mergeQueryParams } from './merge-query-params'

export const listViewMethods = {
  /**
   * Sets the orderBy and clears the page query params
   *
   * @param {string} fieldName
   * @param {string} direction
   */
  onSetOrder(fieldName, direction) {
    let orderBy = `${direction === 'desc' ? '-' : ''}${fieldName}`
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
