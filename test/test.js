/* eslint-disable no-undef */

const articles = require('../routes/articles')
const chai = require('chai');
const chaiHttp = require('chai-http');


const {expect} = chai;
chai.use(chaiHttp);

describe('articles test route',()=> {
    it('displays the whole articles',(done)=> {
        chai
            .request(articles)
            .get('/')
            .end((req,res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equals('succcess');
                expect(res.body.message).to.equals('articles showed successfully')
            done();
            })
    })
})