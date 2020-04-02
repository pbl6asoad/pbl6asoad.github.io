const User = require('../models/user.model');
const jwt = require('jsonwebtoken')

exports.user_create = function (req, res) {
 
   User.find({login:req.body.login}, (err, data) =>{
        console.log(data);
        if (data.length) { 
            return res.json({
                msg: "Пользователь с таким логином уже существует"
            })
        } else {
            let user = new User(
                {
                    login: req.body.login,
                    password: req.body.password
                }
            );
        
            jwt.sign({user}, 'secretkey', /* { expiresIn: '30s' },*/ (err, token, next) => {
                user['token'] = token
                res.json({
                  token
                });
              });
        
            user.save(function (err) {  
                if (err) {
                    return err;
                }
                console.log('User Created successfully')
            })  
        }


    })
   
};

exports.user_login = function (req, res) {
   let token = req.headers["authorization"].split(' ')
    
  
   User.find({token:token[1]}, (err, data) => {
       if(data.length) {
           console.log(`${data[0].login}`);
           res.json({
            "isPassed" : "true",
            "msg": `Вы вошли как ${data[0].login}`
        })
       } else {
        res.json({
            "isPassed" : "false",
            "msg": `Введите логин и пароль`
        })

       }
   }) 
   
};

exports.user_loging = function (req, res) {
    let login = req.headers["login"]    
    let password = req.headers["password"]
     
   
    User.find({login:login, password:password}, (err, data) => {
        if(data.length) {
            console.log(`${data[0].login}`);
            res.json({
             "isPassed" : "true",
             "msg": `Вы вошли как ${data[0].login}`,
             "token": `${data[0].token}`
         })
        } else {
        console.log("nea");
         res.json({
             "isPassed" : "false",
             "msg": `ты попал друг`
         })
 
        }
    }) 
    
 };

exports.redirect = function (req, res) {
   let code = req.url.split('=')
   console.log(code[1]);
   res.json({
    "token" : code[1]
}) 
};