module.exports = ({ planets, species, people, starships, vehicles }, models) =>
  Promise.all([
    // Add associations from the bottom up
    require('../associations/vehicle')(vehicles, models),
    require('../associations/starship')(starships, models),
    require('../associations/person')(people, models),
    require('../associations/species')(species, models),
    require('../associations/planet')(planets, models),
  ])
