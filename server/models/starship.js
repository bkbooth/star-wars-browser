module.exports = (sequelize, DataTypes) => {
  return sequelize.define('starship', {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    class: DataTypes.STRING, // starship_class
    manufacturer: DataTypes.STRING,
    cost: DataTypes.BIGINT, // cost_in_credits
    length: DataTypes.DECIMAL,
    crew: DataTypes.INTEGER,
    passengers: DataTypes.INTEGER,
    maxAtmospheringSpeed: DataTypes.INTEGER, // max_atmosphering_speed
    hyperdriveRating: DataTypes.FLOAT, // hyperdrive_rating
    megalights: DataTypes.INTEGER, // MGLT
    cargoCapacity: DataTypes.BIGINT, // cargo_capacity
    consumables: DataTypes.STRING,
    // hasMany: films, people (as pilots)
    // url: DataTypes.STRING,
    // created: DataTypes.DATE,
    // edited: DataTypes.DATE,
  })
}
