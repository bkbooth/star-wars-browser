/**
 * New Error class that adds a HTTP status code
 *
 * @param {string} [message='Error']
 * @param {number} [status=400]
 *
 * @constructor
 */
function HttpError(message, status) {
  this.name = 'HttpError'
  this.message = message || 'Error'
  this.status = status || 400
  this.stack = (new Error()).stack
}
HttpError.prototype = Object.create(Error.prototype)
HttpError.prototype.constructor = HttpError

module.exports = HttpError
