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

    it('responds to get /avatars with status of 200', (done) => {
        request(api.get('/avatars').expect(200, done));
    });
    it('retrieves an avatar by id', (done) => {
        request(api)
            .get('/avatars/3')
            .expect(200)
            .expect({id: 3, name: "Anna", health: 110, strength: 6, endurance: 9}, done)

    });

});