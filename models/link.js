var md5 = require('md5');

function Shortner(url, keyword) {
  this.url = url;
  this.keyword = keyword;
}

Shortner.prototype.checkUrlProtocol = function(url){
  return /\b(http)/.test(url);
}

Shortner.prototype.appendHttpProtocol = function(url){
  if(!Shortner.prototype.checkUrlProtocol(url)){
    url ='http://www.'+ url;
  }
  return url;
}

Shortner.prototype.hash = function(url){
  return md5(url)
}

module.exports = Shortner;
