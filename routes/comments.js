"use strict"

var express = require('express');
var _ = require('lodash');
var commentStorage = require('../util/commentStorage');

var router = express.Router();

router.get('/list', function (req, res, next) {
    var userid = req.session.userid;
    if (!userid) {
        res.redirect('/login');
    }
    else {
        res.locals.userid = userid;
        var comments = commentStorage.getAllComments();
        // If the comment's author is current login user, then he can remove it.
        res.locals.comments = _.map(comments, function(comment) {
            var cloneObj = _.clone(comment);
            cloneObj.canRemove = (cloneObj.author === userid);
            return cloneObj;
        });
        res.render('comments.ejs');
    }
});

router.post('/post', function (req, res, next) {
    var userid = req.session.userid,
        comment = req.body.comment;
    commentStorage.addComment(comment, userid);
    res.send('{"result": "succeed"}');
});

router.get('/remove', function (req, res, next) {
    var userid = req.session.userid,
        id = req.param('id');
    commentStorage.removeById(id);
    res.send('{"result": "succeed"}');
});


module.exports = router;