const express = require('express')
const router = express.Router()
const ccart  = require('../controllers/cart')

router.post("/create", (req, res) => {
    const {items, client_id} = req.body

    //array é para indicar que tem que te um vetor
    //lenght é para indicar o tamanho do vetor, que ele tem que ser maior que 0

    if(!Array.isArray(items)|| !items.length || !client_id){
        return res.status(400).json({ message: 'não tem items!'})
        
    }

    const cart = ccart.create_cart(items, client_id)
    return res.status(200).json({ message: 'Sucesso!', cart: cart})

} )
 
router.get("/read", (req, res) => {
    
    return res.status(200).json({ message: 'item adicionado ', cart: ccart.read_cart()})
 
} )
 
router.put("/upgrade/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name,price} = req.body
 
    let retorno = ccart.up_id(id,name,price)
    return res.status(retorno.status).json(retorno.msg)
 
} )
 
 
router.delete("/delete/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(ccart.delete_cart(id)){
        return res.status(201).json("deletado com sucesso!")
    }
    else{
    return res.status(404).json("não encontrado")
    }
})

module.exports = router