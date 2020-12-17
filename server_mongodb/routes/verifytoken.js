const express = require('express')
const app = express()
const Jwt = require('../jwt')

const auth = async(req, res, next) => {
    const raw = String(req.headers.authorization)

    try {
        const jwt = new Jwt(raw)
        const id = await jwt.verifyToken()
        if (id == 'err') {
            res.status(403).send('token 失效')
        } else {
            let yanshi = new Jwt(id);
            let newToken = yanshi.gennerateToken();
            req.body.newToken = newToken;
            next()
        }
    } catch (e) {
        res.status(403).send(
            'token 失效'
        )
    }
}

module.exports = auth