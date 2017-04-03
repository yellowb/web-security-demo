"use strict"

var express = require('express');
var router = express.Router();

var users = [{
    userid: 'yellow',
    password: 'yellow'
}, {
    userid: 'tom',
    password: 'tom'
}];

function checkUserPwd(userid, password) {
    for(var i in users) {
        if(users[i].userid === userid && users[i].password === password) {
            return true;
        }
    }
    return false;
}

router.get('/', function (req, res, next) {
    res.render('login.ejs');
});

router.post('/check', function (req, res, next) {
    if(checkUserPwd(req.body.userid, req.body.password)) {
        console.log('Login successfully.');
        req.session.userid = req.body.userid;
        res.redirect('/comments/list');
    }
    else {
        console.log('Login failed.');
        req.body.userid = null;
        res.redirect('/login');
    }
});

router.get('/logout', function (req, res, next) {
    console.log('Logout.');
    req.body.userid = null;
    res.redirect('/login');
});

module.exports = router;
