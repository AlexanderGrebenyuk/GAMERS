const jwtConfig = {
    access: {
      expiresIn: `${5 * 1000}`, /// 5 seconds
    },
    refresh: {
      expiresIn: `${12 * 60 * 60 * 1000}` , //12 hours
    },
  };
  
  module.exports = jwtConfig;