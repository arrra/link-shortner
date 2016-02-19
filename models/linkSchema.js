var mongoose = require('mongoose'),
Schema       = mongoose.Schema;

var linkSchema = Schema({
  original_link: {type: String},
  keyword: {type: String},
  shortend: [{
    link: String,
    suffix: Number
  }]
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
