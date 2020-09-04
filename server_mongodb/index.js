const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

require('./routes')(app)
require('./plugins/db')(app)

app.listen(3000, () => {
    console.log('listen localhost:3000')
})