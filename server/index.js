const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')

// Setup the Sequelize database
let sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
})
let models = require('./models')(sequelize)
console.log('MODELS', models)

// Setup the express app
let app = express()
app.use(cors())

sequelize
  .sync({ force: true, logging: false })
  .then(() => app.listen(8081, () =>
    console.log('listening on localhost:8081')))
