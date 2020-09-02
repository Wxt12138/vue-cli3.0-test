const path = require('path');
const express = require('express');
const app = express();

app.get('/api/getList', (req, res, next) => {
    res.json({
        data: '这是后台返回的结果'
    })
})

app.listen(3000);
console.log('success listen at prot:3000')