module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const register = require('../models/register')

    console.log(88)
    router.post('/register', async(req, res) => {
        console.log(req, 89)
        const model = await register.create(req.body)

        res.send(model)
    })

    app.use('/api', router)
}