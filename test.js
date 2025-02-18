//npm install --save-dev jest supertest

const request = require('supertest');
const app = require('./api'); 

describe('Testes CRUD para API de Usuários', () => {
    let itemid;
    let userId;
    let cartid; 

    const variacao = 6
   
    it('Deve criar um usuário', async () => {
        const res = await request(app)
            .post('/user/create/')
            .send({
                login: `Vitor Amaro ${variacao}`,
                email: `jorge${variacao}@gmail.com`,
                password: '28062006',
                cep: '13573214',
                born:'2000-01-03',
                gender:'masculino'
            });

        expect(res.body).toHaveProperty('message');
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('user');
        userId = res.body.user.id;
    });

    it('Deve buscar todos os usuários', async () => {
        const res = await request(app)
            .get('/user/read/')

        expect(res.body).toHaveProperty('users');
        expect(res.body).toHaveProperty('message', 'Usuários encontrados');
    });

    it('Deve buscar um usuário pelo ID', async () => {
        const res = await request(app)
            .get(`/user/show/${userId}`)

        expect(res.body).toHaveProperty('user');
        expect(res.body.user).toHaveProperty('email', `jorge${variacao}@gmail.com`);
        expect(res.body).toHaveProperty('message', 'Usuário encontrado');
       
        
    });

    it('Deve atualizar um usuário', async () => {
        const res = await request(app)
            .put(`/user/upt/${userId}`)
            .send({
                login: "jorge",
                password: "28062006"
            });

        
        expect(res.body).toHaveProperty('user');
        expect(res.body.user).toHaveProperty('login', 'jorge');
        expect(res.body.user).toHaveProperty('password', '28062006');
        expect(res.body).toHaveProperty('message', 'Usuário atualizado com sucesso');
        

    });

    

    it('Deve criar um item', async () => {
        const res = await request(app)
            .post('/item/create')
            .send({
                 name: "Decoração de Futebol",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/jcg4pBt.png", 

                 name: "Balões de Futebol",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/P1Irwdd.png",

                 name: "Painel de Futebol",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/rJfGa7j.png",

                 name: "Cestas de Pipas Coloridas",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/lpqbjHZ.png",

                 name: "Guirlandas de Futebol",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/Vuljog4.png",

                 name: "Pipoca em Caixinhas",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/u6gpKBW.png",

                 name: "Mini Hot Dogs",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/aeE5CkE.png",

                 name: "Cupcakes Decorados",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/Mi6dD8X.png",

                 name: "Biscoitos Decorados",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/47ruFAK.png",

                 name: "Suco de Frutas",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/29ci6sZ.png",

                 name: "Mesa de Princesas",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/YKEVhEw.png",

                 name: "Toalha de Mesa Infantil",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/gKaWKtz.png",

                 name: "Pratos e Copos Coloridos",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/eRr2Sys.png",

                 name: "Talheres de Plástico",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/XD5A3Bk.png",

                 name: "Cadeira Infantil",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/FL1NumI.png",

                 name: "Arranjo de Flores para 15 Anos",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/3prHXqH.jpeg",

                 name: "Painel de LED Personalizado",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/a4eYBE4.jpeg",

                 name: "Cortina de Luzes",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/E5PtnwX.png",

                 name: "Balcão de Recepção",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/URQ4H9K.png",

                 name: "Centro de Mesa com Velas",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/BR9tkKY.png",

                 name: "Mini Sanduíches Gourmet",
                 decorations: "Cesta de Futebol",
                 items:"Cadeira Infantil",
                 food: "Suco de Frutas",
                 imagem: "https://i.imgur.com/Ll2EXcZ.jpeg",
        
            });

        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('item');
        itemid = res.body.item.id;
    });


    it('Deve buscar 1 item', async () => {
        console.log("Buscando o item: "+itemid)

        const res = await request(app)
            .get(`/item/show/${itemid}`) 

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('item')
    });

    it('Deve buscar todos os item', async () => {
        const res = await request(app)
            .get('/item/read/')

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('message','Sucesso')
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

    it('Deve busca todos carrinhos', async () => {
        const response = await request(app).get('/cart/read');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message',"carrinhos encontrados");
    })


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
        expect(response.body).toHaveProperty('db');
        expect(response.body).toHaveProperty('message',"Carrinho criado");  
        cartid = response.body.db.id;
    });


        
   
    it('deve buscar um carrinho pelo id', async () => {
        const response = await request(app)
            .get(`/cart/show/${cartid}`)
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('db')
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
        expect(response.body).toHaveProperty('db')
        expect(response.body).toHaveProperty('message',"Sucesso");
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
        

    
    it('Deve deletar um usuário', async () => {
        const res = await request(app)
         .delete(`/user/del/${userId}`)
        
         expect(res.body).toHaveProperty('message', 'Usuário deletado com sucesso');  
    });

    
    it('Deve deletar um carrinho ', async () => {
        const response = await request(app)
            .delete(`/cart/delete/${cartid}`) 
        expect(response.status).toBe(203);
        expect(response.body).toHaveProperty("message","Deletado");
    });

    

    it('Deve deletar um Item', async () => {
        const res = await request(app)
            .delete(`/item/del/${itemid}`) 
            

        expect(res.status).toBe(203); 
    });    
});  
       
//npm test
