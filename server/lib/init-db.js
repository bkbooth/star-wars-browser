const path = require('path')
const Sequelize = require('sequelize')

const DB_PATH = path.join(__dirname, '..', 'data', 'db.sqlite')

module.exports = async function() {
  // Setup the Sequelize database
  let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: DB_PATH,
    logging: null, // provide a logger?
  })

  // Initialize all models
  let models = require('../models')(sequelize)

  console.log('Initializing database...')
  await sequelize.sync({ force: true })

  return models
}
