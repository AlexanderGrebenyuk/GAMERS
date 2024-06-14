const jwt = require('jsonwebtoken');
const jwtConfig  = require('../configs/jwtConfig');
require('dotenv').config();
/**
 * 
 * @param {User} payload 
 * @returns 
 */
function generateTokens(payload) {
    return {
      accessToken: jwt.sign(payload, '123456789', jwtConfig.access),
      refreshToken: jwt.sign(payload, '987654321', jwtConfig.refresh),
    };
  }
  

module.exports = generateTokens;