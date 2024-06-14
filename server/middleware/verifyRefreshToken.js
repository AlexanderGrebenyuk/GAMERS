const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyRefreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, '987654321');

    res.locals.user = user;

    next();
  } catch (error) {
    res.clearCookie('refreshToken').sendStatus(401);
  }
}

module.exports = verifyRefreshToken;
