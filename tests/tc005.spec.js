const expect = require('chai').expect;
const should = require('should');
const supertest = require('supertest');
const api = supertest('https://api.punkapi.com/v2');

describe('Test random api', () => {

    it('Test random', async () => {
        const res = await api.get('/beers/random')
            .expect(200);
        console.log(res.body);
        console.log(res.body.map(e => e.ingredients.malt).map(e3 => e3.map(e4 => e4.name)));
        console.log(res.body.map(e => e.ingredients.malt)[0].map(e1 => e1.amount.value));
        console.log(res.body.map(e => e.ingredients.malt)[0].map(e1 => e1.amount.value).reduce((acc, current) => acc + current, 0));
        console.log(res.body.map(e => e.ingredients.hops)[0].map(e1 => e1.amount.value));
        console.log(res.body.map(e => e.ingredients.hops)[0].map(e1 => e1.amount.value).reduce((acc, current) => acc + current, 0));

        const mash_temp = res.body.map(e => e.method.mash_temp)[0].map(e1 => e1.temp.value).shift();
        console.log(mash_temp);

        const fermentation = res.body.map(e => e.method.fermentation).map(e1 => e1.temp.value).shift();
        console.log(fermentation);
        const array = [];
        array.push(mash_temp);
        array.push(fermentation);
        const result = array.reduce((acc, current) => acc + current, 0);
        console.log(result);
    })



})

