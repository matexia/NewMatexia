/**
 *
 * @author matexia
 * @created 2018/09/01 11:48
 */
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'matexia',
  database: 'matexia'
})
connection.connect()

function login(sql, callback) {
  connection.query(sql, function(err, result) {
    callback(err, result)
  })
}

function registered(addsql, addsqlparams, callback) {
  connection.query(addsql, addsqlparams, function(err, result) {
    callback(err, result)
  })
}
exports.login = login
exports.registered = registered