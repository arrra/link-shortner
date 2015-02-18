var superagent = require('superagent');
var expect = require('expect.js');
var assert = require('assert');

describe('homepage', function(){
  it('should respond to GET',function(done){
    superagent
    .get('http://localhost:3000')
    .end(function(res){
      expect(res.status).to.equal(200);
      done(); })
  })
})

