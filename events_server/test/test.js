const mongoose = require("mongoose");
const chai = require('chai');
const Events = require('../controllers/event.controller');
const chaiHttp = require('chai-http');
const server = require('../server');
const { response } = require("express");
const should = chai.should();

chai.use(chaiHttp);
const API = 'http://localhost:3000'

describe('Events', () => {
    describe('/GET events', () => {
        it('should get all events', (done) => {
            chai.request(API)
            .get('/events')
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                response.body.length.should.be.eql(3);
                done();
            });
        });
    }) ;    
});


