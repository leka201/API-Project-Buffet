const express = require('express')
const router = express.Router()
const citem = require('../controllers/item')

router.post("/create", (req, res) => {
    const {name,price , color , dimenson} = req.body
 
    if(!name || ! price || ! color ||! dimenson){
        return res.status(400).json({ message: 'Os itemsp não foram cadastrado!'})
        
    }
 
    const item = citem.create_item(name ,price ,color, dimenson)
    return res.status(200).json({ message: 'Sucesso itens cadastrado ', itens: item})
 
} )

router.get("/read", (req, res) => {
    
    return res.status(200).json({ message: 'Sucesso itens encontrado ', itens: citem.read_item()})
 
} )

router.put("/upd/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const {name ,price ,color, dimenson} = req.body

    let retorno = citem.up_id(id,name ,price ,color, dimenson)
    return res.status(retorno.status).json(retorno.msg)

} )

router.delete("/del/:id" ,(req,res) =>{
    const id = parseInt(req.params.id)
    if(citem.delete_item(id)){
        return res.status(201).json("Deletado")

    }
    else {
        return res.status(404).json("Não encontrou")

    }
        
})



module.exports = router