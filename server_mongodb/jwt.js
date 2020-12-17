const jwt = require('jsonwebtoken')
const serect = require('./ENV')

class Jwt {
    constructor(data) {
            this.data = data
        }
        // 生成token
    gennerateToken() {
        let data = this.data
        let createDate = Math.floor(Date.now() / 1000)
        let token = jwt.sign({
                data,
                exp: createDate + 60 * 20,
            },
            serect
        )
        return token
    }
    verifyToken() {
        let token = this.data
        let res
        try {
            let result = jwt.verify(token, serect)
            let {
                exp = 0
            } = result,
            current = Math.floor(Date.now() / 1000)
            if (current <= exp) {
                res = result.data || {}
            }
            console.log(553, result)
        } catch (e) {
            res = 'err'
        }
        console.log(551, res)
        return res
    }
}

module.exports = Jwt