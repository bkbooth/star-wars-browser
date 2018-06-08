module.exports = (sequelize, DataTypes) => {
  return sequelize.define('person', {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    name: DataTypes.STRING,
    birthYear: DataTypes.STRING, // birth_year
    eyeColor: DataTypes.STRING, // eye_color
    gender: DataTypes.STRING,
    hairColor: DataTypes.STRING, // hair_color
    height: DataTypes.INTEGER,
    mass: DataTypes.INTEGER,
    skinColor: DataTypes.STRING, // skin_color
    // belongsTo: planet (as homeworld)
    // hasMany: films, species, starships, vehicles
    // url: DataTypes.STRING,
    // created: DataTypes.DATE,
    // edited: DataTypes.DATE,
  })
}
