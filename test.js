//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); 

describe('Testes CRUD para API de Usuários', () => {
    let itemid;
    let userId;
    
   
    it('Deve criar um usuário', async () => {
        const res = await request(app)
            .post('/user/create')
            .send({
                login: 'Vitor Amaro 3',
                email: 'jorge@gmail.com',
                password: '28062006',
                cep: '135732149',
                born:'2000-01-03',
                gender:'masculino'
            });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('user');
        userId = res.body.user.id;
    });



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
        itemid = res.body.itens.id;
    });



    it('Deve retornar um JSON com status 200', async () => {
        const response = await request(app).get('/cart/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message',"item adicionado");
    })


    let cartid;
    it('Deve criar um carrinho', async () => {
        const response = await request(app).post('/cart/create').send({
            "items": [
                {
                    "item_id":itemid,
                    "qtd":2
                }
            ],
            "clientId": userId
        })
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('cart_created');
        expect(response.body).toHaveProperty('message',"Carrinho criado");  
        cartid = response.body.cart_created.id;
    });


        
   
    it('deve buscar um id', async () => {
        const response = await request(app)
            .get(`/cart/show/${cartid}`)
        
        expect(app.response.status).toBe(201);
        expect(response.body).toHaveProperty('cart_created')
        expect(response.body).toHaveProperty('message',"Encontrado");
        
    });



    it('Deve atualizar um carrinho', async () => {
        const response = await request(app)
            .put(`/cart/update/${cartid}`)
            .send({
                "items": [
                    {
                        "item_id": itemid,
                        "qtd": 5
                    }
                ]
            });

        expect(response.status).toBe(203);
        expect(response.body).toHaveProperty('cart_created')
        expect(response.body).toHaveProperty('message',"sucesso");
    });



    it('Deve deletar um carrinho ', async () => {
        const response = await request(app)
            .delete(`/cart/delete/${cartid}`) 
        expect(response.status).toBe(201);
        expect(response.body.message).toHaveProperty("deletado com sucesso!");
    });


});