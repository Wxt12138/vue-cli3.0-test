const express = require('express')
const app = express()

var shops = require('./public/shops') //本地json文件数据

var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/api',
                changePrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        }, //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
    },
}