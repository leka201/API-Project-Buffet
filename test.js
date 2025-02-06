//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api.js'); // Importa a aplicação

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
*/
const request = require('supertest');
const app = require('./api'); // Ajuste o caminho conforme sua estrutura


describe('Testes CRUD para API de Usuários', () => {
    let items;
    

    it('Deve criar um item', async () => {
        const res = await request(app)
            .post('/item/create')
            .send({
                 name: "Decoração de Futebol",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/jcg4pBt.png" 
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('itens');
        userId = res.body.id;
    });
})
//npx jest 