const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('http://localhost:3000' || process.env.TEST_ENV);

describe('Test mock api', () => {

    it('Test random', async () => {
        const res = await api.get('/employees')
            .expect(200);
        console.log(res.body);
    })

})

