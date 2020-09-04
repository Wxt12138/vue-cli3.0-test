var sqlMap = {
    getUse: 'SELECT * FROM userinfo WHERE name =?',
    register: 'INSERT INTO userinfo (name,password) VALUES (?,?)',
}

module.exports = sqlMap