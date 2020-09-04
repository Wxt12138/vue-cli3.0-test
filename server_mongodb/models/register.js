const mongoose = require('mongoose')
const collectionNmae = require('../collection')

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
})

module.exports = mongoose.model('useinfo', schema, collectionNmae.useinfo)