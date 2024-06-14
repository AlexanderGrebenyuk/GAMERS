const { User } = require("../db/models");

async function userFind(req, res, next) {
  const user = await User.findByPk(req.params.id);
  res.locals.user = user;
  next();
}

module.exports = userFind;