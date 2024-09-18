const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const rparty = require('./routes/party')
app.use('/party', rparty)

const ccart = require('./controllers/cart')
const citem = require('./controllers/item')


//bahia
app.post("/item", (req, res) => {
    const {name,price , color , dimenson} = req.body
 
    if(!name || ! price || ! color ||! dimenson){
        return res.status(400).json({ message: 'Os itemsp não foram cadastrado!'})
        
    }
 
    const item = citem.create_item(name ,price ,color, dimenson)
    return res.status(200).json({ message: 'Sucesso itens cadastrado ', itens: item})
 
} )

app.get("/item", (req, res) => {
    
    return res.status(200).json({ message: 'Sucesso itens encontrado ', itens: citem.read_item()})
 
} )

app.put("/item/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name ,price ,color, dimenson} = req.body

    let retorno = citem.up_id(id,name ,price ,color, dimenson)
    return res.status(retorno.status).json(retorno.msg)

} )

app.delete("/item/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(citem.delete_item(id)){
        return res.status(201).json("Deletado")

    }
    else {
        return res.status(404).json("Não encontrou")

    }
        
})


//ana

//**vai para routes

app.post("/cart", (req, res) => {
    const {items, client_id} = req.body

    //array é para indicar que tem que te um vetor
    //lenght é para indicar o tamanho do vetor, que ele tem que ser maior que 0

    if(!Array.isArray(items)|| !items.length || !client_id){
        return res.status(400).json({ message: 'Os items e o clienteID não foram preenchidos!'})
        
    }

    const cart = ccart.create_cart(items, client_id)
    return res.status(200).json({ message: 'Sucesso!', cart: cart})

} )
 
app.get("/cart", (req, res) => {
    
    return res.status(200).json({ message: 'Sucesso cartcadastrado ', cart: ccart.read_cart()})
 
} )
 
app.put("/cart/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name,price} = req.body
 
    let retorno = ccart.up_id(id,name,price)
    return res.status(retorno.status).json(retorno.msg)
 
} )
 
 
app.delete("/cart/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(ccart.delete_cart(id,client_id)){
        return res.status(201).json("não foi")
    }
    else{
    return res.status(404).json("não encontrado")
    }
})

//vitor

app.get("/", (req, res)=>{
    return res.status(200).json("Hello")
})

app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
   