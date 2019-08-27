const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('https://api.openbrewerydb.org');
const api1 = supertest('https://apisandbox.openbankproject.com')


describe('openbrewerydb', () => {

    it('openbrewerydb', async () => {
        const res = await api.get('/breweries')
            .expect(200);
        console.log(res.body);
        expect(res.body).to.be.not.null;
        console.log(res.body.map(e => e.id));
        expect(res.body.find(e1 => e1.city === 'Little Rock').city).to.be.equal('Little Rock');

    })

    it('openBank project', async () => {
        const res = await api1.get('/obp/v1.2.1/banks/rbs/accounts/savings-kids-john/public/transactions')
            .expect(200);
        expect(res.body).to.be.not, null;
        console.log(res.body.transactions.map(e => e.metadata).filter(e1 => e1.narrative));


    })

})