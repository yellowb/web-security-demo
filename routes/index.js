"use strict"

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var title = '<script>(function(){alert(1);})()</script>';
  res.render('index', { title: title });
});

module.exports = router;
