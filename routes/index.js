var express = require('express');
var router = express.Router();
var Result = require('../models/result');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//random char
function randomCharUrl()
{
    var text = "localhost:3000/";
    var listRandom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += listRandom.charAt(Math.floor(Math.random() * listRandom.length));

    return text;
}

//saving link to DB
router.post('/link', function(req, res) {
  Result.create({
    link_to_be_shortened: req.body.userProvidedUrl,
    sys_gen_link: randomCharUrl()
  }, function(err, link) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.render('result/link');
    }
  });
});

module.exports = router;
