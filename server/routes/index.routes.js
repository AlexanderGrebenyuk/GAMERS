const router = require('express').Router()

const questionRouter = require('./api/question.routes')
const themeRouter = require('./api/theme.routes')
const authRouter = require('./api/auth.routes')
const tokens = require('./api/tokens.api.routes');
const users = require('./api/users.api.routes');

router.use('/users', users);
router.use('/questions', questionRouter)
router.use('/themes', themeRouter)
router.use('/auth', authRouter)
router.use('/tokens', tokens);

module.exports = router