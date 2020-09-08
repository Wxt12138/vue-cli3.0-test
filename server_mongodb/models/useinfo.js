const mongoose = require('mongoose')
const collectionNmae = require('../collection')

const schema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        },
    },
})

module.exports = mongoose.model('useinfo', schema, collectionNmae.useinfo)