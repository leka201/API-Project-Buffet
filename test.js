//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('cart/api.js'); // Importa a aplicação

describe('Testando a API', () => {
    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).get('/cart/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
    });

    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(api).post('/cart/create').send({
    
                "items": [
                    {
                        "item_id":1,
                        "qtd":2
                    },
                    {
                        "item_id":7,
                        "qtd":100
                    }
                ],
                "clientId": 5
    
            })
            ;
        });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cart_created')


     


});

//npx jest 