module.exports = (sequelize, DataTypes) => {
  return sequelize.define('person', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    swapiId: { type: DataTypes.INTEGER, unique: true },
    slug: { type: DataTypes.STRING, unique: true },
    name: DataTypes.STRING,
    birthYear: DataTypes.FLOAT, // birth_year
    eyeColor: DataTypes.STRING, // eye_color
    gender: DataTypes.STRING,
    hairColor: DataTypes.STRING, // hair_color
    height: DataTypes.INTEGER,
    mass: DataTypes.FLOAT,
    skinColor: DataTypes.STRING, // skin_color
    // belongsTo: planet (as homeworld)
    // hasMany: films, species, starships, vehicles
    // url: DataTypes.STRING,
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'edited',
  })
}
