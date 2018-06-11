module.exports = (sequelize, DataTypes) => {
  return sequelize.define('planet', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    name: DataTypes.STRING,
    diameter: DataTypes.INTEGER,
    rotationPeriod: DataTypes.INTEGER, // rotation_period
    orbitalPeriod: DataTypes.INTEGER, // orbital_period
    gravity: DataTypes.FLOAT,
    population: DataTypes.BIGINT,
    climate: DataTypes.STRING,
    terrain: DataTypes.STRING,
    surfaceWater: DataTypes.STRING, // surface_water
    // hasMany: people (as residents), films
    // url: DataTypes.STRING,
    // created: DataTypes.DATE,
    // edited: DataTypes.DATE,
  })
}
