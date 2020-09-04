// const mysql = require('mysql');

const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '000000',
    database: 'my_project',
    prot: '3306',
}

// const pool = mysql.createPool({
//     host: mysqlConfig.host,
//     user: mysqlConfig.user,
//     password: mysqlConfig.password,
//     database: mysqlConfig.database,
//     port: mysqlConfig.prot,
//     multipleStatements: true
// });

// var setValue = function() {
//     pool.getConnection((err, connection) => {
//         var sql = 'INSERT INTO test(id,name) VALUES (1,"blog")';
//         connection.query(sql, (err, result) => {
//             console.log(result);
//             connection.release();
//         })
//     })
// }

// setValue();

module.exports = mysqlConfig