const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const rparty = require('./routes/party')
app.use('/party', rparty)

const ccart = require('./controllers/cart')


const item = require('./routes/item')
app.use("/item", item)



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
   