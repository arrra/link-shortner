var express = require('express');
var router = express.Router();
var Result = require('../models/result');
var underscore = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/', function(req, res, next) {
  //var id = req.params.id;
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  Result.find({custom_gen_link : fullUrl}, function(err,url){
    res.redirect(url[0].link_to_be_shortened);
  });
});


//random char
var listRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//saving link to DB
router.post('/link', function(req, res) {


  function linkCheck () {
    var reg = /^http(s)?\:\/\//i;
    var newUserUrl =  req.body.userProvidedUrl;
    if(reg.test(req.body.userProvidedUrl) === false){
      newUserUrl = req.body.userProvidedUrl.replace(/^/,'http://');
    }

    return newUserUrl;
  }



  function randomCharUrl() {
    var text = "http://localhost:3000/";

    for( var i=0; i < 5; i++ )
    text += listRandom.charAt(Math.floor(Math.random() * listRandom.length));

    return text;
  }

  function callNTimes () {
    return customCharUrl();
  }

  function customCharUrl () {

    var text = "http://localhost:3000/" + req.body.userFavoriteKeyword;

    for( var i=0; i < 1; i++ )
    text += listRandom.charAt(Math.floor(Math.random() * listRandom.length));

    return text;
  }


  function keywordLink () {
    Result.find({keyword : req.body.userFavoriteKeyword}, function(err,keyword) {
    var text = "http://localhost:3000/" + req.body.userFavoriteKeyword;
      if (err == null){
        return text;
      }
    })
  }

  Result.create({
    link_to_be_shortened: linkCheck(),
    keyword : req.body.userFavoriteKeyword,
    custom_gen_link : underscore(3).times(callNTimes),
    sys_gen_link : randomCharUrl(),
    keyword_link : keywordLink()
  }, function(err, link) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.render('result/link', {link: link});
    }
  });
});

module.exports = router;
