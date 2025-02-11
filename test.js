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

    it('Deve buscar todos os usuários', async () => {
        const res = await request(app)
            .get('/user/read/')

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
        


    it('Deve buscar 1 item', async () => {
        console.log("Buscando o item: "+itemid)

        const res = await request(app)
            .get(`/item/show/${itemid}`) 

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe;
    });

    it('Deve buscar todos os item', async () => {
        const res = await request(app)
            .get('/item/read/')

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('Sucesso')
    });
       
    it('Deve atualizar um item', async () => {
        const res = await request(app)
            .put(`/item/upd/${itemid}`)
            .send({
                nome: 'Teste User Atualizado'
            });

  
        expect(res.status).toBe(200);
        console.log(res)
        expect(res.body).toHaveProperty('item');
    });
    //npx jest 

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

    let idpary
    it('deve criar uma festa', async () => {
        const res = await request(app)
            .post('/party/create')
            .send({
                name: "Festa Infantil",
                cart_id: cartid,
                user_id: userId,
                tipo_pag: "cartao",
                cpf_cnpj:"999.999.999-99",
                nome_cartao:"nuu",
                número_cartao:"9999 9999 9999 9999",
                validade:"99/99",
                CVV:"999",
                valor: 2000
            });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Sucesso');
        expect(res.body).toHaveProperty('party');
        idpary = res.body.party.id
    });

    it('pagamento com pix', async ()=> {
        const res = await request(app)
            .post('/party/create')
            .send({
                name: "Festa Infantil",
                cart_id: cartid,
                user_id: userId,
                tipo_pag: "pix",
                valor: 2000
            })

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Sucesso');
        expect(res.body).toHaveProperty('party');
    });

    it('Buscar a Festa criada', async () => {
        const res = await request(app)
            .get('/party/read/')
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Sucesso');
        expect(res.body).toHaveProperty('db');
    });

    it('Atualizar Festa', async () => {
        const res = await request(app)
            .put(`/party/update/${idpary}`)
            .send({
                name: "Festa Infantil",
                cart_id: cartid,
                user_id: userId,
                pix: "pix",
                cpf_cnpj:"",
                nome_do_cartao:"",
                numero_do_cartao:"",
                validade:"",
                CVV:""
            });
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Festa Atualizada com sucesso');
    });


    it('Deletar Festa', async () => {
        const res = await request(app)
            .delete(`/party/del/${idpary}`)
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Foi de base');
    })
        

    it('Deve deletar um Item', async () => {
        const res = await request(app)
            .delete(`/item/del/${itemid}`) 
            

        expect(res.status).toBe(203); 
    });    

});  
