require('dotenv').config();
const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('https://sandbox.api.nab/v2');
const payLoad = require('../api/account');

describe('NAB Api', () => {

    it.skip('accounts details', async () => {
        const res = await api.get('/accounts?v=1')
            .set('Authorization', process.env.API_KEY)
            .expect(200);
        expect(res.body).to.be.not.null;
        expect(res.body.response.accountSummaries.map(e => e.accountType).shift()).to.be.equal('Mastercard');
        expect(res.body.response.accountSummaries.map(e => e.accountLevelFlags)[0].map(e1 => e1.identifier)).to.be.not.eql([]);
    })

    it.skip('Get Account Balance',async () => {
        const res = await api.post('/accounts/balance?v=1')
            .set('Authorization', process.env.API_KEY)
            .send(payLoad)
            .expect(200);

         console.log(res.body);   
    })
   
})