var express = require('express'),
router      = express.Router(),
Result      = require('../models/result'),

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;
