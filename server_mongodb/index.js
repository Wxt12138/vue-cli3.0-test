const express = require('express')
const app = express()
const bodyPareser = require('body-parser')

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