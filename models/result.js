var mongoose = require('mongoose'),
Schema       = mongoose.Schema;

//Schema for a link object
var linkSchema = Schema({
  link_to_be_shortened :   { type:  String, required:  true },
  keyword :                { type:  String, required:  true },
  custom_gen_link :        { type:  Array, unique:     true },
  sys_gen_link :           { type:  String, unique:    true },
  keyword_link :           { type:  String, unique:    true }
});


var Result = mongoose.model('Link', linkSchema);

module.exports = Result;
