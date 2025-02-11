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

    it('Deve buscar todos os usuários', async () => {
        const res = await request(app)
            .get('user/read/')

        expect(res.body).toHaveProperty('db');
        expect(res.body).toHaveProperty('message', 'Usuarios nao encontrado');
    });

    it('Deve buscar um usuário pelo ID', async () => {
        const res = await request(app)
            .get(`/user/show/${userId}`)

        expect(res.body).toHaveProperty('user');
        expect(res.body.user).toHaveProperty('email', 'jorge@gmail.com');
        expect(res.body).toHaveProperty('message', 'Usuario nao encontrado');
       
        
    });

    it('Deve atualizar um usuário', async () => {
        const res = await request(app)
            .put(`user/upt/${userId}`)
            .send({
                login: "jorge",
                password: "28062006"
            });
        
        expect(res.body).toHaveProperty('user');
        expect(res.body.user).toHaveProperty('login', 'jorge');
        expect(res.body.user).toHaveProperty('password', '28062006');
        expect(res.body).toHaveProperty('message', 'Usuario nao encontrado');
        

    });

    it('Deve deletar um usuário', async () => {
        const res = await request(app)
         .delete(`user/del/${userId}`)
        
         expect(res.body).toHaveProperty('message', 'Usuario deletado com Sucessso');  
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
        expect(res.body).toHaveProperty('item');
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
    });
        
});

//npx jest 
