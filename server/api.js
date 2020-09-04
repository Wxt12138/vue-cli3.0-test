const mysql = require('mysql')
const dbConfig = require('./db')
const sqlMap = require('./sqlMap')

const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.prot,
    multipleStatements: true,
})

module.exports = {
    getUse(req, res, next) {
        var id = req.query.id
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getUse
            connection.query(sql, [id], (err, result) => {
                res.json(result)
                console.log(886, result, sql)
                connection.release()
            })
        })
    },
    register(req, res, next) {
        let { name, password } = req.body
        let sqlArr = [name, password]
        pool.getConnection((err, connection) => {
            var sql = sqlMap.register
            connection.query(sql, sqlArr, (err, result) => {
                if (err) console.log(err)
                console.log(data)
                res.json('注册成功')
                connection.release()
            })
        })
    },
}