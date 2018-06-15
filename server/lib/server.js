const path = require('path')
const express = require('express')
const morgan = require('morgan')
const debug = require('debug')
const cors = require('cors')
const Sequelize = require('sequelize')
const finale = require('finale-rest')
const randomSortMilestone = require('../utils/random-sort-milestone')

const DB_PATH = path.join(__dirname, '..', 'data', 'db.sqlite')
const API_HOST = process.env.API_HOST || 'localhost'
const API_PORT = Number(process.env.API_PORT) || 8081
const API_BASE = process.env.API_BASE || '/api'
const API_ACTIONS = ['list', 'read']
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || '*'

// Setup the express app
let app = express()
app.use(morgan('dev'))
app.use(cors({ origin: CLIENT_ORIGIN }))

// Setup the Sequelize database
let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: DB_PATH,
  logging: (message) => debug('db')(message),
})
let {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} = require('../models')(sequelize)

// Setup finale REST API
finale.initialize({ app, sequelize, base: API_BASE })

let filmResource = finale.resource({
  model: Film,
  actions: API_ACTIONS,
  /* include: [
    { model: Planet, attributes: ['id', 'name'] },
    { model: Person, as: 'characters', attributes: ['id', 'name'] },
    { model: Species, attributes: ['id', 'name'] },
    { model: Starship, attributes: ['id', 'name'] },
    { model: Vehicle, attributes: ['id', 'name'] },
  ], */
  search: { attributes: ['title'] },
  sort: { default: 'episodeId' },
})
filmResource.use(randomSortMilestone)

let planetResource = finale.resource({
  model: Planet,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Person, as: 'residents', attributes: ['id', 'name'] },
  ], */
  search: { attributes: ['name'] },
  sort: { default: 'swapiId' },
})
planetResource.use(randomSortMilestone)

let speciesResource = finale.resource({
  model: Species,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Planet, as: 'homeworld', attributes: ['id', 'name'] },
    { model: Person, as: 'people', attributes: ['id', 'name'] },
  ], */
  search: { attributes: ['name'] },
  sort: { default: 'swapiId' },
})
speciesResource.use(randomSortMilestone)

let personResource = finale.resource({
  model: Person,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Planet, as: 'homeworld', attributes: ['id', 'name'] },
    { model: Species, attributes: ['id', 'name'] },
    { model: Starship, attributes: ['id', 'name'] },
    { model: Vehicle, attributes: ['id', 'name'] },
  ], */
  search: { attributes: ['name'] },
  sort: { default: 'swapiId' },
})
personResource.use(randomSortMilestone)

let starshipResource = finale.resource({
  model: Starship,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Person, as: 'pilots', attributes: ['id', 'name'] },
  ], */
  search: { attributes: ['name'] },
  sort: { default: 'swapiId' },
})
starshipResource.use(randomSortMilestone)

let vehicleResource = finale.resource({
  model: Vehicle,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Person, as: 'pilots', attributes: ['id', 'name'] },
  ], */
  search: { attributes: ['name'] },
  sort: { default: 'swapiId' },
})
vehicleResource.use(randomSortMilestone)

app.listen(
  API_PORT,
  API_HOST,
  () => debug('http')(`Listening at http://${API_HOST}:${API_PORT}${API_BASE}`),
)
