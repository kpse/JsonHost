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
    it('should respond with Content-Type json', function (done) {
      agent
        .get('/long_facts.json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(/"title":\s"All About Canada"/)
        .end(done)
    })
  })

  describe('GET /slow_facts.json', function () {
    it('should respond with Content-Type json', function (done) {
      agent
        .get('/slow_facts.json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(/"title":\s"About Canada"/)
        .end(done)
    })
  })

  describe('GET /unstable_facts.json', function () {
    it('should respond with Content-Type json', function (done) {
      agent
        .get('/unstable_facts.json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(/"title":\s"About Canada"/)
        .end(done)
    })
  })
});