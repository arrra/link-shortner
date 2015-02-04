var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema for a link object
var linkSchema = Schema({
  link_to_be_shortened : { type: String, required: true },
  sys_gen_link : { type: Array, unique: true }
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
