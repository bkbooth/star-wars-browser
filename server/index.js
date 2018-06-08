const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')

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
epilogue.initialize({ app, sequelize })
epilogue.resource({ model: Film, endpoints: ['/films', '/films/:id'] })
epilogue.resource({ model: Person, endpoints: ['/people', '/people/:id'] })
epilogue.resource({ model: Planet, endpoints: ['/planets', '/planets/:id'] })
epilogue.resource({ model: Species, endpoints: ['/species', '/species/:id'] })
epilogue.resource({ model: Starship, endpoints: ['/starships', '/starships/:id'] })
epilogue.resource({ model: Vehicle, endpoints: ['/vehicles', '/vehicles/:id'] })

sequelize
  .sync({ force: true, logging: false })
  .then(() => app.listen(8081, () =>
    console.log('listening on localhost:8081')))
