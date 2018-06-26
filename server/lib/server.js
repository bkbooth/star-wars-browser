const path = require('path')
const express = require('express')
const morgan = require('morgan')
const debug = require('debug')
const cors = require('cors')
const Sequelize = require('sequelize')
const createResource = require('../utils/create-resource')
const HttpError = require('../utils/http-error')

const DB_PATH = path.join(__dirname, '..', 'data', 'db.sqlite')
const API_HOST = process.env.API_HOST || 'localhost'
const API_PORT = Number(process.env.API_PORT) || 8081
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
  operatorsAliases: false,
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
app.use(`${API_BASE}/films`, createResource(Film))
app.use(`${API_BASE}/people`, createResource(Person))
app.use(`${API_BASE}/planets`, createResource(Planet))
app.use(`${API_BASE}/species`, createResource(Species))
app.use(`${API_BASE}/starships`, createResource(Starship))
app.use(`${API_BASE}/vehicles`, createResource(Vehicle))

// Catch 404 and forward to error handler
app.use((req, res, next) => next(new HttpError('Not Found', 404)))

// Error handler
app.use((err, req, res, _next) => {
  res.status(err.status || 400).json({
    message: err.message,
    error: err,
  })
})

app.listen(
  API_PORT,
  API_HOST,
  () => debug('http')(`Listening at http://${API_HOST}:${API_PORT}${API_BASE}`),
)
