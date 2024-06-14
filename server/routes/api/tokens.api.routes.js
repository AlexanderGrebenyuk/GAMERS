const cookiesConfig = require("../../configs/cookiesConfig");
const verifyRefreshToken = require("../../middleware/verifyRefreshToken");
const generateTokens = require("../../utils/generateTokens");

const router = require("express").Router();

router.get("/refresh", verifyRefreshToken, async (req, res) => {
      const {accessToken, refreshToken} = generateTokens({user: res.locals.user});
      res.cookie("refreshToken", refreshToken, cookiesConfig)
      .json({accessToken, user: res.locals.user}); 
})


module.exports = router;