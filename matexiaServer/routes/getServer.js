/**
 *
 * @author matexia
 * @created 2018/09/01 11:48
 */
var express = require('express');
var mysql = require('../matexia/mysql');
var router = express.Router();

router.get('/login', function(req, res, next) {
  	mysql.login("select * from user where username = '" + req.query.username + "' and password = '" + req.query.password + "'", function(results,fields){
  		let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  		let maxPos = $chars.length
  		let result = {
  			id_token: '',
  			success: false,
  			message: '',
  			code: 0,
  			data: {
  				username: ''
  			}
  		}
  		if (results) {
        result.code = 0
        result.success = false
        result.data.username = ''
        result.id_token = ''
  		} else {
        result.code = 1
        result.success = true
        result.data.username = fields[0].username
        for (i = 0; i < 128; i++) {
          result.id_token += $chars.charAt(Math.floor(Math.random() * maxPos))
    　　}
  		}
  		res.send(result)
  	})
});
router.get('/gets', function(req, res, next) {
	var result = {code:200,msg:"ddd"}
	res.send(result);
})
module.exports = router
