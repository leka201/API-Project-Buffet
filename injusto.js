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
                login: 'Vitor Amaro 21',
                email: 'jorge21@gmail.com',
                password: '28062006',
                cep: '13573214',
                born:'2000-01-03',
                gender:'masculino'
            });

        expect(res.body).toHaveProperty('message');
        console.log(res.body.message)
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
        expect(res.body.user).toHaveProperty('email', 'jorge9@gmail.com');
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
        itemid = res.body.item.id;
    });



    it('Deve busca todos carrinhos', async () => {
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


        
   
    it('deve buscar um carrinho pelo id', async () => {
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

    let idparty
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
        expect(res.body).toHaveProperty('message','Sucesso');
        expect(res.body).toHaveProperty('party');
        idparty = res.body.party.id
    });

    it('pagamento com pix', async ()=> {
        const res = await request(app)
            .post('/party/create')
            .send({
                name: "Festa Infantil",
                cart_id: 1,
                user_id: 1,
                tipo_pag: "pix",
                valor: 2000
            })

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Sucesso');
        expect(res.body).toHaveProperty('party');
    });

    it('Buscar todas as Festas criadas', async () => {
        const res = await request(app)
            .get('/party/read/')
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Sucesso');
        expect(res.body).toHaveProperty('db');
    });

    it('Atualizar Festa', async () => {
        const res = await request(app)
            .put(`/party/update/${idparty}`)
            .send({
                name: "Festa Infantil",
                cart_id: 1,
                user_id: 1,
                pix: "pix",
                cpf_cnpj:"",
                nome_cartao:"",
                numero_cartao:"",
                validade:"",
                CVV:""
            });
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Festa Atualizada com sucesso');
    });


    it('Deletar Festa', async () => {
        const res = await request(app)
            .delete(`/party/del/${idparty}`)
        
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Foi de base');
    })
        

    it('Deve deletar um Item', async () => {
        const res = await request(app)
            .delete(`/item/del/${itemid}`) 
            

        expect(res.status).toBe(203); 
    });    

});  
       
//npm test
