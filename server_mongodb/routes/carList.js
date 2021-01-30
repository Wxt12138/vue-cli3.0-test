module.exports = (app) => {
    const express = require('express')
    const router = express.Router()
    const carList = require('../models/cars')
    const auth = require('./verifytoken')
    // 购物车添加
    router.post('/addCar',auth,async (req,res) =>{
      try{
        let model = await carList.create(JSON.parse(JSON.stringify(req.body)))
        if(model){
          res.send({
            code:200,
            message:"添加购物车成功"
          })
        }
      }catch{
        res.status(500).send({
          message:"服务器异常"
        })
      }
    

    })

    app.use('/api', router)
}