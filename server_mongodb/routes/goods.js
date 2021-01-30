module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const goods = require('../models/goods')
    const auth = require('./verifytoken')

    // 获取首页链接
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

    // 获取详情链接
    router.get('/goodsDetail', auth, async(req, res) => {
        try {
            let goodsList = await goods.findOne({
                "shop_name": req.query.name
            })
            if(goodsList){
                res.send({
                  code: 200,
                  list: goodsList,
              })
            }else{
              res.send({
                code: 304,
                msg:'请求资源不存在'
            })
            }
            
        } catch (error) {
            res.send({
                code: 100003,
                message: '请求错误',
            })
        }
    })


    app.use('/api', router)
}