"use strict"

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.locals.message = 'yellow';
  res.locals.scripts = '<script>(function(){alert(0);})()</script>';
  res.render('comments.ejs');
});

module.exports = router;
