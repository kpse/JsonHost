var app = require('../../index'),
  should = require('should'),
  request = require('supertest'),
  agent = request.agent(app)

describe("URLs", function () {

  describe('GET /facts.json', function () {
    it('should respond with Content-Type json', function (done) {
      agent
        .get('/facts.json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(/"title":\s"About Canada"/)
        .end(done)
    })
  })

  describe('GET /long_facts.json', function () {
    it('should respond with a long json', function (done) {
      agent
        .get('/long_facts.json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(/"title":\s"All About Canada"/)
        .end(done)
    })
  })

  describe('GET /slow_facts.json', function () {
    it('should respond with json in 10 seconds', function (done) {
      agent
        .get('/slow_facts.json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(/"title":\s"About Canada"/)
        .end(done)
    })
  })

  describe('GET /unstable_facts.json', function () {
    it('should not be stable', function (done) {
      agent
        .get('/unstable_facts.json')
        .end(function(err, res){
          if (res.status == 200 || res.status == 500)
            return done();
          throw new Error("Unexpected response other than 200 and 500.");
        });
    })
  })
});