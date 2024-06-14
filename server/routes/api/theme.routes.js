const router = require('express').Router()
const {Theme} = require('../../db/models')

router.get('/', async (req,res) => {
    try {
        const theme = await Theme.findAll()
        res.status(200).json({message: 'success', theme})
    } catch ({message}) {
        res.status(500).json({error:message})
    }
})

router.get('/:themeId', async (req,res) => {
    const {themeId} = req.params
    try {
        const theme = await Theme.findOne({where: {id: themeId}})
        res.status(200).json(theme)
    } catch ({message}) {
        res.status(500).json({error:message})
    }
})

module.exports = router