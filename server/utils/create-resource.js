const express = require('express')
const HttpError = require('./http-error')

module.exports = function createResource(Model) {
  const router = express.Router()

  /**
   * Model {
   *   tableName, // eg. 'people'
   *   options,
   *   attributes,
   *   associations,
   * }
   *
   * Model.options.name // eg. { plural: 'people', singular, 'person' }
   */

  router.get('/', (req, res, next) => {
    Model
      .findAll({
        order: parseOrderQuery(req.query.order),
      })
      .then(records => res.status(200).json(records))
      .catch(err => next(err))
  })

  router.get('/:recordId', (req, res, next) => {
    Model
      .findById(req.params.recordId, {
      })
      .then(record => {
        if (record == null) {
          return next(new HttpError(`Record ${Model.options.name.singular}:${req.params.recordId} not found`, 404))
        }

        res.status(200).json(record)
      })
      .catch(err => next(err))
  })

  return router

  function parseOrderQuery(orderQuery) {
    if (orderQuery == null) return [['swapiId']]
    else if (orderQuery === 'random') return [Model.sequelize.fn('RANDOM')]

    let orderParts = orderQuery.split(',')
    return orderParts.map(part => {
      let [, direction, attribute] = /([-+]?)(\S+)/.exec(part)
      return [attribute, direction === '-' ? 'DESC' : 'ASC']
    })
  }
}
