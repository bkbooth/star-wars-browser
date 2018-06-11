const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')

const API_HOST = process.env.API_HOST || 'localhost'
const API_PORT = Number(process.env.API_PORT) || 8081
const API_BASE = process.env.API_BASE || '/api'
const API_ACTIONS = ['list', 'read']

// Setup the express app
let app = express()
app.use(cors())

// Setup the Sequelize database
let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
})
let {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} = require('./models')(sequelize)

// Setup epilogue REST API
epilogue.initialize({ app, sequelize, base: API_BASE })
epilogue.resource({ model: Film, actions: API_ACTIONS })
epilogue.resource({ model: Person, actions: API_ACTIONS })
epilogue.resource({ model: Planet, actions: API_ACTIONS })
epilogue.resource({ model: Species, actions: API_ACTIONS })
epilogue.resource({ model: Starship, actions: API_ACTIONS })
epilogue.resource({ model: Vehicle, actions: API_ACTIONS })

app.listen(
  API_PORT,
  API_HOST,
  () => console.log(`Listening at http://${API_HOST}:${API_PORT}${API_BASE}`),
)
