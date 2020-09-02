const express = require('express')
const app = express()

var shops = require('./public/shops') //本地json文件数据

var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
    devServer: {
        before(app) {
            app.get('/api/shops', (req, res) => {
                res.json({
                    errno: 0, // 这里是你的json内容
                    data: shops,
                })
            })
            app.get('/api/recommend', (req, res) => {
                res.json({
                    errno: 0, // 这里是你的json内容
                    data: recommend,
                })
            })
        },
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
    },
}