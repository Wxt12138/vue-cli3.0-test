module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const useinfo = require('../models/useinfo')
    const Jwt = require('../jwt')

    // 注册
    router.post('/register', async(req, res) => {
        try {
            const model = await useinfo.create(req.body)
            if (model) {
                res.send({
                    code: 200,
                    message: '注册成功',
                })
            }
        } catch (err) {
            res.send({
                code: 100010,
                message: '已有相同用户名',
            })
        }
    })

    // 登录
    router.post('/login', async(req, res) => {
        let user = await useinfo.findOne({
            name: req.body.name,
        })
        if (!user) {
            return res.status(422).send({
                message: '用户名不存在',
                code: '100000',
            })
        }
        const isPasswoegValid = require('bcrypt').compareSync(
            req.body.password,
            user.password
        )

        if (!isPasswoegValid) {
            return res.status(422).send({
                message: '密码错误',
                code: '100001',
            })
        }
        // 生成token
        let jwt = new Jwt(String(user._id))
        let token = jwt.gennerateToken()
        res.send({
            code: '200',
            message: '登录成功',
            token: token,
        })
    })

    app.use('/api', router)
}