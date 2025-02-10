//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); 

describe('Testes CRUD para API de Usuários', () => {
    let itemid;
    let userId;
    let cartid;
   
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
        expect(response.body).toHaveProperty('message');
    })

    it('Deve retornar um JSON com status 200', async () => {
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

it('Deve buscar 1 item', async () => {
    const res = await request(app)
        .get('/item/show/1')

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe;
});

it('Deve buscar todos os item', async () => {
    const res = await request(app)
        .get('/item/read/')

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe;
});

it('Deve atualizar um usuário', async () => {
    const res = await request(app)
        .put(`/item/upd/${userId}`)
        .send({
            nome: 'Teste User Atualizado'
        });

    expect(res.status).toBe(200);
    console.log(res)
    expect(res.body).toHaveProperty();
});
    it('deve criar uma festa', async () => {
        const res = await request(app)
            .post('/party/create')
            .send({
                name: "Festa Infantil",
                cart_id: 1,
                user_id: 1,
                tipo_pag: "cartao",
                cpf_cnpj:"999.999.999-99",
                nome_cartao:"nuu",
                número_cartao:"9999 9999 9999 9999",
                validade:"99/99",
                CVV:"999",
                valor: 2000
            });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id');
    });

    it('pagamento com pix', async ()=> {
        const res = await request(app)
            .post()
            .send({})

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('id');
        token = res.body.token;
    });

    it('Buscar a Festa criada', async () => {
        const res = await request(app)
            .get('')
        
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('Atualizar Festa', async () => {
        const res = await request(app)
            .put('')
            .set('')
            .send({})
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('')
    });
        


