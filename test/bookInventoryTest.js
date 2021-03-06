var request = require('supertest');
var assert = require('assert');
var repository = require('../src/inMemoryStockRepository')();
var app = require('../src/app.js')(repository);

describe('Book inventory', function () {
    it('allows to stock up the items', function (done) {
        request(app)
            .post('/stock')
            .send({
                isbn: '1234',
                count: 10
            })
            .expect('Content-Type', /json/)
            .expect(200, {isbn: '1234', count: 10}, done);
    })
});