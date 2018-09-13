/**
 *
 * @author matexia
 * @created 2018/09/01 11:48
 */
let express = require('express')
let mysql = require('../matexia/mysql')
let nodemailer = require('nodemailer')
let config = require('../api/config')
let router = express.Router()
let result = {
    code: 0,
    success: false,
    message: ''
}
let num = ''
let email = ''
let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
        user: config.email.user,
        pass: config.email.pass,
    }
})
router.post('/post/register', function(req, res, next) {
    console.log(req.session)
    mysql.registered('insert into user set ?', {
      username: req.body.username,
      password: req.body.password
    }, function(results, fields) {
        if (results) {
            result.message = 0
            result.message = '用户已存在'
            result.success = false
        } else {
            result.code = 1
            result.message = ''
            result.success = true
        }
        res.send(result)
    })
})
router.post('/post/verification', function(req, res, next) {
    console.log(req.body.email)
    email = req.body.email
    for (var i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10)
    }
    let mailOptions = {
        from: config.email.user, // 发件地址
        to: req.body.email, // 收件列表
        subject: '账户激活', // 标题
        //text和html两者只支持一种
        text: '账户激活', // 标题
        html: `<h1>你好，这是一封来自matexia的邮件！</h1><div>你的验证码是<abbr style="border-bottom: 1px dotted #000; ">${num}</abbr></div>` // html 内容
    }
    res.send(result)
})
module.exports = router