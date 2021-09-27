/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Articulo, conn } = require('../../src/db.js');

const agent = session(app);
const articulo = {
  name: 'Mate',
};

describe('Articulo routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Articulo.sync({ force: true })
    .then(() => Articulo.create(articulo)));
  describe('GET /articulos', () => {
    it('should get 200', () =>
      agent.get('/articulos').expect(200)
    );
  });
});
