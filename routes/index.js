var express = require('express');
var router = express.Router();
var Result = require('../models/result');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//random char
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

//saving link to DB
router.post('/link', function(req, res) {
  Result.create({
    link_to_be_shortened: req.body.userProvidedUrl,
    sys_gen_link: makeid()
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
