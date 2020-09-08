const express = require('express')
const app = express()
const Jwt = require('../jwt')

const auth = async(req, res, next) => {
    const raw = String(req.headers.authorization)
    try {
        const jwt = new Jwt(raw)
        const id = await jwt.verifyToken()
        next()
    } catch (e) {
        res.status(404).send('token 失效')
    }
}

module.exports = auth