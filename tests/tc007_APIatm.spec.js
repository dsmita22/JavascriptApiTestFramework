const expect =require("chai").expect;
const should= require("should");
const supertest =require("supertest");
const api =supertest("https://apis-bank-test.apigee.net/apis/v2.0.1");

describe('API for Atm',()=>{
    it('Atm Api',async() =>{

        const res = await api.get("/locations/atms")
                  .expect(200);
        expect(res.body.Data.Atm.map(e => e.AtmId));
        expect(res.body.Data.Atm.map(e => e.Organisation.ParentOrganisation)[1].OrganisationName.LegalName).to.be.equals('Bank of Ireland (UK) plc');
        expect(res.body.Data.Atm.map(e1 => e1.SupportedLanguages).shift().shift()).to.be.equals('English');

    })

})

