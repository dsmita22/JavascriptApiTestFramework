require('dotenv').config();
const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('https://sandbox.api.nab/v2');

describe('NAB Api', () => {

    it.skip('Test Fixed Rates', async () => {
        const res = await api.get('/fxrates?v=1')
            .set('x-nab-key', process.env.API_KEY)
            .expect(200);
        expect(res.body).to.be.not.null;
        expect(res.body.fxRatesResponse.fxRates[0].buyCurrency).to.be.equal('USD');

    })

    it.skip('Get Locations', async () => {
        const res = await api.get('/locations?v=1&locationType=atm&startIndex=1')
            .set('x-nab-key', process.env.API_KEY)
            .expect(200);

        console.log(res.body);
    })

    it.skip('Get Location By Address' , async () =>{
        const res = await api.get('/locations?v=1&locationType=atm&searchCriteria=addr&address=7030+TAS+Australia&startIndex=1&endIndex=10&radius=10&radiusB=1&radiusC=1')
            .set('x-nab-key' , process.env.API_KEY)
            .expect(200);
        expect(res.body).to.be.not.null;
        expect(res.body.locationSearchResponse.locations[0].apiStructType).to.be.equal('nab');
        
    })

    it.skip('Get Location by Geo' , async () => {
        const res = await api.get('/locations?v=1&locationType=abc&searchCriteria=geo&swLat=-44.9&neLat=-10.4&neLng=153.800&swLng=112.7600&startIndex=1&endIndex=1&fields=basic')
        .set('x-nab-key' , process.env.API_KEY)
        .expect(200);
    expect(res.body).to.be.not.null;
    console.log(expect(res.body.locationSearchResponse.locations.map(e => e.general.key)))
    
    })

    it.skip('Get Location' , async () => {
        const res = await api.get('/location/atm_2A05?v=1')
        .set('x-nab-key' , process.env.API_KEY)
        .expect(200);
    expect(res.body).to.be.not.null;
    expect(res.body.locationDetailResponse.key.smallBusinessBankers.map(e => e.name).shift()).to.be.equal('Joanna Gillen');
    expect(res.body.locationDetailResponse.key.mobileBanker).to.be.equal(false);
    expect(res.body.locationDetailResponse.key.internetBank).to.be.equal(true);
    expect(res.body.locationDetailResponse.key.description).to.be.equal("Ocean Keys Shopping Centre");
    })



})