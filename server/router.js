const express = require('express')
const router = express.Router()
const api = require('./api')

router.get('/getUse', (req, res, next) => {
    api.getUse(req, res, next)
})
router.post('/register', (req, res, next) => {
    api.register(req, res, next)
})

module.exports = router