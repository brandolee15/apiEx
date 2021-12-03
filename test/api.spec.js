const request = require('supertest');
const app = require('../server');

describe('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () =>
        console.log('test server running on port 5000')
        );
    });
    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done);
    });
    it('responds to get / with status of 200', (done) => {
        request(api).get('/').expect(200, done);
    });

});