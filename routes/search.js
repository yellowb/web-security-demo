"use strict"

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var userid = req.session.userid;
    if (!userid) {
        res.redirect('/login');
    }
    else {
        res.locals.userid = userid;
        res.render('search.ejs');
    }
});

module.exports = router;
