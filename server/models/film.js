module.exports = (sequelize, DataTypes) => {
  return sequelize.define('film', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    swapiId: { type: DataTypes.INTEGER, unique: true },
    title: DataTypes.STRING,
    episodeId: DataTypes.INTEGER, // episode_id
    openingCrawl: DataTypes.TEXT, // opening_crawl
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    releaseDate: DataTypes.DATE, // release_date
    // hasMany: species, starships, vehicles, people (as characters), planets
    // url: DataTypes.STRING,
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'edited',
  })
}
