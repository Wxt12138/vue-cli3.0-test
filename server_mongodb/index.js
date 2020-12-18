// 开发模式配置跨域，也可以node配合express使用跨域
const express = require('express')
const app = express()
const bodyPareser = require('body-parser')
//跨域使用
app.use(require('cors')())
app.use(bodyPareser.urlencoded({
    extended: false
}))
app.use(express.json())


require('./routes')(app)
require('./routes/goods')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
    console.log('listen localhost:3000')
})