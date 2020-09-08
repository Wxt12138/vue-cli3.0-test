module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const goods = require('../models/goods')
    const auth = require('./verifytoken')

    // 登录
    router.get('/goodsList', auth, async(req, res) => {
        try {
            let goodsList = await goods.find()
            res.send({
                code: 200,
                list: goodsList,
            })
        } catch (error) {
            res.send({
                code: 100003,
                message: '请求错误',
            })
        }
    })

    app.use('/api', router)
}