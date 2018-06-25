const path = require('path')
const Sequelize = require('sequelize')
const log = require('debug')('seed:db')

const DB_PATH = path.join(__dirname, '..', '..', 'data', 'db.sqlite')

module.exports = async function() {
  // Setup the Sequelize database
  let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: DB_PATH,
    logging: null, // provide a logger?
  })

  // Initialize all models
  let models = require('../../models')(sequelize)

  log('Initializing database...')
  await sequelize.sync({ force: true })

  return models
}
