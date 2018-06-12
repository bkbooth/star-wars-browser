const path = require('path')
const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')

const DB_PATH = path.join(__dirname, '..', 'data', 'db.sqlite')
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
  storage: DB_PATH,
})
let {
  Film,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} = require('../models')(sequelize)

// Setup epilogue REST API
epilogue.initialize({ app, sequelize, base: API_BASE })
epilogue.resource({
  model: Film,
  actions: API_ACTIONS,
  /* include: [
    { model: Planet, attributes: ['id', 'name'] },
    { model: Person, as: 'characters', attributes: ['id', 'name'] },
    { model: Species, attributes: ['id', 'name'] },
    { model: Starship, attributes: ['id', 'name'] },
    { model: Vehicle, attributes: ['id', 'name'] },
  ], */
})
epilogue.resource({
  model: Planet,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Person, as: 'residents', attributes: ['id', 'name'] },
  ], */
})
epilogue.resource({
  model: Species,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Planet, as: 'homeworld', attributes: ['id', 'name'] },
    { model: Person, as: 'people', attributes: ['id', 'name'] },
  ], */
})
epilogue.resource({
  model: Person,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Planet, as: 'homeworld', attributes: ['id', 'name'] },
    { model: Species, attributes: ['id', 'name'] },
    { model: Starship, attributes: ['id', 'name'] },
    { model: Vehicle, attributes: ['id', 'name'] },
  ], */
})
epilogue.resource({
  model: Starship,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Person, as: 'pilots', attributes: ['id', 'name'] },
  ], */
})
epilogue.resource({
  model: Vehicle,
  actions: API_ACTIONS,
  /* include: [
    { model: Film, attributes: ['id', 'title'] },
    { model: Person, as: 'pilots', attributes: ['id', 'name'] },
  ], */
})

app.listen(
  API_PORT,
  API_HOST,
  () => console.log(`Listening at http://${API_HOST}:${API_PORT}${API_BASE}`),
)
