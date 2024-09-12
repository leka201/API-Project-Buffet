const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
 
var carts = []
function create_cart(items ,client_id){
    let id = 0
    if (carts.length > 0 ) id = carts[carts.length -1].id +1
 
    const cart = {
        "itens": items,
        "IDcliente": client_id
      
    }

    
    carts.push(cart)
    return cart
}
 
function up_id(id,name,price){
  let idx =  carts.findIndex(cart => cart.id == id)
 
  if(idx == -1 ){
    return {status:404, msg: "Não accarthei "}
  }
 
  if(name) carts[idx].name = name
 
  if(price) carts[idx].price = price
   
  return{status : 200 , msg: cart[idx]}
}

function delete_cart(id){
    let idx = carts.findIndex(cart=> cart.id === id)
    if(idx == -1){
        return false
    }
    carts.splice(idx, 1)
    return true
}

/**vai ir para o routes */
 
app.post("/cart", (req, res) => {
    const {items, client_id} = req.body

    //array é para indicar que tem que te um vetor
    //lenght é para indicar o tamanho do vetor, que ele tem que ser maior que 0

    if(!Array.isArray(items) || !items.length || !client_id){
        return res.status(400).json({ message: 'Os items e o clienteID não foram preenchidos!'})
        
    }

    const cart = create_cart(items, client_id)
    return res.status(200).json({ message: 'Sucesso!', cart: cart})

} )
 
app.get("/cart", (req, res) => {
    
    return res.status(200).json({ message: 'Sucesso cartcadastrado ', cart: cart})
 
} )
 
app.put("/cart/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name,price} = req.body
 
    let retorno = up_id(id,name,price)
    return res.status(retorno.status).json(retorno.msg)
 
} )
 
 
app.delete("/cart/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(delete_cart(id)){
        return res.status(201).json("não foi")
    }
    else{
    return res.status(404).json("não encontrado")
    }
}
)
 




















app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
 
 