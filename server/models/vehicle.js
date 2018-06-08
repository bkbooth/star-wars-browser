module.exports = (sequelize, DataTypes) => {
  return sequelize.define('vehicle', {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    class: DataTypes.STRING, // vehicle_class
    manufacturer: DataTypes.STRING,
    cost: DataTypes.BIGINT, // cost_in_credits
    length: DataTypes.DECIMAL,
    crew: DataTypes.INTEGER,
    passengers: DataTypes.INTEGER,
    maxAtmospheringSpeed: DataTypes.INTEGER, // max_atmosphering_speed
    cargoCapacity: DataTypes.BIGINT, // cargo_capacity
    consumables: DataTypes.STRING,
    // hasMany: films, people (as pilots)
    // url: DataTypes.STRING,
    // created: DataTypes.DATE,
    // edited: DataTypes.DATE,
  })
}
