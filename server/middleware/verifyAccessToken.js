const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]; // Authorization: Bearer accessToken
    const { user } = jwt.verify(accessToken, '123456789');

    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access token');
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
