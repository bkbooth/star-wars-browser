module.exports = {
  list: {
    fetch: {
      before(req, res, context) {
        if (req.query.sort !== 'random') return context.continue

        return this.model.findAll({
          order: [this.resource.sequelize.fn('RANDOM')],
          limit: req.query.count || null,
        })
          .then(people => {
            context.instance = people
            return context.skip
          })
          .catch((err) => context.error(err))
      },
    },
  },
}
