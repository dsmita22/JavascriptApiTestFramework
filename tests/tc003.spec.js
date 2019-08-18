require('dotenv').config();
const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('https://sandbox.api.nab/v2');
const _ = require('lodash');
const payLoad = require('../api/account');

describe('Test Post Account', () => {
    let token;

    it('Test account', async () => {
        const res = await api.get('/accounts?v=1')
            .set('Authorization', process.env.Auth_Token)
            .expect(200);
        expect(res.body).to.be.not.null;
        token = res.body.response.accountSummaries.map(e => e.accountToken).shift();

        payLoad.accountPay.request.accounts[0].accountToken = token;

        const resp = await api.post('/accounts/balance?v=1')
            .set('Authorization', process.env.Auth_Token)
            .send(payLoad.accountPay)
            .expect(200);
        expect(resp.body.response.accounts.map(e => e.category).shift()).to.be.equal("DOMESTIC");
        expect(resp.body.response.accounts.map(e => e.balance.amount.availableBalance).map(e1 =>e1.currency).shift()).to.be.equal("THB");
        expect(resp.body.response.accounts.map(e => e.balance.amount.availableBalance).map(e1 =>e1.amount).shift()).to.be.equal("10.00");
        
        
    })


})