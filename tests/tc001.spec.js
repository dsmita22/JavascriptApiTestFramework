require('dotenv').config();
const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('https://sandbox.api.nab/v2');

describe('NAB Api', () => {

    it('Test Fixed Rates', async () => {
        const res = await api.get('/fxrates?v=1')
            .set('x-nab-key', process.env.API_KEY)
            .expect(200);
        expect(res.body).to.be.not.null;
        expect(res.body.fxRatesResponse.fxRates[0].buyCurrency).to.be.equal('USD');

    })

    it('Get Locations', async () => {
        const res = await api.get('/locations?v=1&locationType=atm&startIndex=1')
            .set('x-nab-key', process.env.API_KEY)
            .expect(200);

        console.log(res.body);
    })

})