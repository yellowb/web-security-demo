"use strict"

var express = require('express');
var commentStorage = require('../util/commentStorage');

var router = express.Router();

router.get('/list', function (req, res, next) {
    var userid = req.session.userid;
    if (!userid) {
        res.redirect('/login');
    }
    else {
        res.locals.userid = userid;
        res.locals.comments = commentStorage.getAllComments();
        res.render('comments.ejs');
    }
});

router.post('/post', function (req, res, next) {
    var userid = req.session.userid,
        comment = req.body.comment;
    commentStorage.addComment(comment, userid);
});

router.get('/remove', function (req, res, next) {
    var userid = req.session.userid,
        id = req.param.id;
    commentStorage.removeById(id);
});


module.exports = router;
