const request = require('supertest');
const app = require('../src/app');

beforeEach(() => {
  console.log('beforeEach');
});

afterEach(() => {
  console.log('afterEach');
});

test('Should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'Christopher Mancuyas',
      email: 'christopher.mancuyas@cebuoversea.com',
      password: 'admin123'
    })
    .expect(201);
});
