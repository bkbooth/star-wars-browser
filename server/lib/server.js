const path = require('path')
const express = require('express')
const morgan = require('morgan')
const debug = require('debug')
const cors = require('cors')
const Sequelize = require('sequelize')
const createResource = require('../utils/create-resource')
const HttpError = require('../utils/http-error')

const DB_PATH = path.join(__dirname, '..', 'data', 'db.sqlite')
const API_HOST = process.env.API_HOST || undefined
const API_PORT = Number(process.env.PORT) || 8081
const API_BASE = process.env.API_BASE || '/api'
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

// Setup resource endpoints
app.use(`${API_BASE}/films`, createResource(Film, { searchAttributes: ['title'] }))
app.use(`${API_BASE}/people`, createResource(Person, { searchAttributes: ['name'] }))
app.use(`${API_BASE}/planets`, createResource(Planet, { searchAttributes: ['name'] }))
app.use(`${API_BASE}/species`, createResource(Species, { searchAttributes: ['name'] }))
app.use(`${API_BASE}/starships`, createResource(Starship, { searchAttributes: ['name'] }))
app.use(`${API_BASE}/vehicles`, createResource(Vehicle, { searchAttributes: ['name'] }))

// Catch 404 and forward to error handler
app.use((req, res, next) => next(new HttpError('Not Found', 404)))

// Error handler
app.use((err, req, res, _next) => {
  res.status(err.status || 400).json({
    message: err.message,
    error: err,
  })
})

const listener = app.listen(
  API_PORT,
  API_HOST,
  () => {
    const server = listener.address()
    debug('http')(`Listening at http://${server.address}:${server.port}${API_BASE}`)
  },
)
