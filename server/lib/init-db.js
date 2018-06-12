const Sequelize = require('sequelize')

module.exports = async function() {
  // Setup the Sequelize database
  let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: null, // provide a logger?
  })

  // Initialize all models
  let models = require('../models')(sequelize)

  console.log('Initializing database...')
  await sequelize.sync({ force: true })

  return { sequelize, ...models }
}
