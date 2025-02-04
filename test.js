//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); // Importa a aplicação

describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).get('/cart/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('mensagem');
    });
});

//npx jest 