var express = require('express'),
router      = express.Router(),
Result      = require('../models/result'),
underscore  = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/:id', function(req, res, next){
  var fullUrl = 'http://localhost:3000' + req.originalUrl;

  Result.find({custom_gen_link: fullUrl}, function(err,url){
  if(req.query.userFavoriteKeyword === undefined && req.query.userProvidedUrl === undefined){
    res.redirect('back');
  } else {
    res.redirect(url[0].link_to_be_shortened);
    }
  });
});


var listRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//saving link to DB
router.post('/link', function(req, res) {

  /* check for protocol */
  function linkCheck () {
    var reg = /^http(s)?\:\/\//i;
      var newUserUrl = req.body.userProvidedUrl;
    if(reg.test(req.body.userProvidedUrl) === false){
      newUserUrl = req.body.userProvidedUrl.replace(/^/,'http://');
    }
    return newUserUrl;
  }

  /* Generates chars then appends to keyword */
  function customCharUrl () {
    var text = "http://localhost/" + req.body.userFavoriteKeyword;

    for( var i=0; i < 1; i++ )
    text += listRandom.charAt(Math.floor(Math.random() * listRandom.length));
    return text;
  }

  /* Generates chars then appends to link */
  function randomCharUrl () {
    var text = "http://localhost/";

    for( var i=0; i < 5; i++ )
    text += listRandom.charAt(Math.floor(Math.random() * listRandom.length));
    return text;
  }

  /* Calling this 3 times to get 3 links*/
  /* Refer to customcharurl() */
  function callNTimes () {
    return customCharUrl();
  }

  function keywordLink () {
    Result.find({keyword : req.body.userFavoriteKeyword}, function(err,keyword) {
      var text = "http://localhost/" + req.body.userFavoriteKeyword;
      if (err == null){
        return text;
      }
    });
  }

  Result.create({
    link_to_be_shortened:  linkCheck(),
    keyword:              req.body.userFavoriteKeyword,
    custom_gen_link:      underscore(3).times(callNTimes),
    keyword_link:         keywordLink()
  }, function(err, link) {
    if (err) {
      console.log(err);
      res.render('index', {err: err});
      return;
    } else {
      res.render('index', {link: link});
    }
  });
});

module.exports = router;
