const mongoose = require("mongoose")
const collectionNmae = require('../collection');

const schema = new mongoose.Schema({
    shop_name: {
        type: String
    },
    shop_img: {
        type: String
    },
    shop_price: {
        type: Number
    },
    shop_int: {
        type: String
    },
    shop_id: {
        type: Number
    },
    shop_num: {
        type: Number
    },
    shop_dec: {
        type: String
    },
    send_way: {
      type: String
    },
    month_num: {
      type: Number
    },
    send_price:{
      type: String
    },
    addr:{
      type: String
    },
    status:{
      type: Number
    },
    dec:{
      type: String
    }
})

module.exports = mongoose.model('carList', schema, collectionNmae.carList)