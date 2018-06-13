module.exports = (sequelize, DataTypes) => {
  return sequelize.define('species', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    swapiId: { type: DataTypes.INTEGER, unique: true },
    slug: { type: DataTypes.STRING, unique: true },
    name: DataTypes.STRING,
    classification: DataTypes.STRING,
    designation: DataTypes.STRING,
    averageHeight: DataTypes.INTEGER, // average_height
    averageLifespan: DataTypes.INTEGER, // average_lifespan
    eyeColors: DataTypes.STRING, // eye_colors
    hairColors: DataTypes.STRING, // hair_colors
    skinColors: DataTypes.STRING, // skin_colors
    language: DataTypes.STRING,
    // belongsTo: planet (as homeworld)
    // hasMany: people, films
    // url: DataTypes.STRING,
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'edited',
  })
}
