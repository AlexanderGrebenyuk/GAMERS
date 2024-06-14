const bcrypt = require('bcrypt');

const router = require('express').Router();
const { User } = require('../../db/models');
const generateTokens = require('../../utils/generateTokens');
const cookiesConfig = require('../../configs/cookiesConfig');

router.post('/login', async (req, res) => {
  const { email, password } = req.body; 

  try {
    const targetUser = await User.findOne({ where: { email } });
    if (!targetUser)
      return res.status(401).json({ message: 'Неверный email или пароль' });
    const isValid = await bcrypt.compare(password, targetUser.password);
    if (!isValid)
      return res.status(401).json({ message: 'Неверный email или пароль' });
    const user = targetUser.get();
    delete user.password;
    const { accessToken, refreshToken } = generateTokens({ user });
    res
      .cookie('refreshToken', refreshToken, cookiesConfig)
      .json({ accessToken, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/logout', async (req, res) => {

  res.clearCookie('refreshToken').json({ message: 'OK' });
});

// регистрация рабочая тема
router.post('/signup', async (req, res) => {
  const { name, login, password, email } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const reg = await User.create({
      name,
      login,
      password:hash,
      email,
    });
    res.json(reg);
  } catch (error) {
    res.status(418).json({ message: error.message });
  }
});

module.exports = router;
