const request = require('supertest');
const app = require('../src/app');

const User = require('../src/models/user');

beforeEach(async () => {
  console.log('beforeEach');
  await User.deleteMany();
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
