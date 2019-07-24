const express = require('express')
const camelCase = require('lodash/camelCase')
const pickBy = require('lodash/pickBy')
const Sequelize = require('sequelize')
const HttpError = require('./http-error')

module.exports = function createResource(Model, { searchAttributes }) {
  const router = express.Router()

  router.param('recordId', (req, res, next, recordId) => {
    Model.findById(recordId)
      .then(record => {
        if (record == null) {
          return next(new HttpError(`Record ${Model.options.name.singular}:${req.params.recordId} not found`, 404))
        }

        req.record = record
        next()
      })
      .catch(err => next(err))
  })

  router.get('/', (req, res, next) => {
    Model
      .findAll({
        where: parseWhereQuery(req.query),
        order: parseOrderQuery(req.query.order || req.query.sort),
        limit: req.query.limit || req.query.count || null,
      })
      .then(records => res.status(200).json(records))
      .catch(err => next(err))
  })

  router.get('/:recordId', (req, res, _next) => res.status(200).json(req.record))

  Object.keys(Model.associations).forEach(association => {
    router.get(`/:recordId/${association}`, (req, res, next) => {
      let methodName = camelCase(`get ${association}`)
      req.record[methodName]({
        where: parseWhereQuery(req.query),
        order: parseOrderQuery(req.query.order),
        limit: req.query.limit || req.query.count || null,
      })
        .then(records => res.status(200).json(records))
        .catch(err => next(err))
    })
  })

  return router

  function parseWhereQuery(queryParams = {}) {
    if (queryParams.q != null) return parseSearchQuery(queryParams.q)
    let modelAttributes = Object.keys(Model.rawAttributes)
    return pickBy(queryParams, (value, key) => modelAttributes.includes(key))
  }

  function parseSearchQuery(searchQuery) {
    return {
      [Sequelize.Op.or]: searchAttributes.map(attribute => ({
        [attribute]: { [Sequelize.Op.like]: `%${searchQuery}%` },
      })),
    }
  }

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
