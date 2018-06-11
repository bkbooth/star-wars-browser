module.exports = (sequelize, DataTypes) => {
  return sequelize.define('vehicle', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    swapiId: { type: DataTypes.INTEGER, unique: true },
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
