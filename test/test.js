var superagent = require('superagent');
var expect = require('expect.js');
var assert = require('assert');
var Shortner = require('../models/link.js')
var suffixCounter = require('../models/suffixCounter.js')

var mongoose = require('mongoose');
var uri = 'mongodb://localhost/link-shortner';
var conn = mongoose.connection;

describe('shortner', function(){

  before(function(done){
    mongoose.connect(uri);
    conn.on('open',function(){
      console.log("connected: ",uri)
      done()
    })
  })

  after(function(done){
    mongoose.connection.close()
    conn.on('close',function(){
      console.log("connection closed: ",uri)
      done()
    })
  })

  beforeEach(function(done){
    mongoose.connection.db.dropCollection('links', function(err){})
    console.log('collection dropped')
    done()
  })

   var shortner = new Shortner('google.com','search');

  it("should return false", function(){
    shortner.checkUrlProtocol(shortner.url)
  })

  it("should return a url with 'http://www.'", function(){
    shortner.appendHttpProtocol(shortner.url)
  })

  it("should increment by 1", function(){
    var count = suffixCounter.incrementSuffixCount();
    assert.equal(++count, suffixCounter.incrementSuffixCount())
  })

})
