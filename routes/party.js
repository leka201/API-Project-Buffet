const express = require('express')
const router = express.Router()
const cparty = require ('../controllers/party')
const Party = require ('../models/party')

//vai para routes
router.post("/create", cparty.create_party) //req vai vim td que vc mandar no body vai estar dentro dela e a res é a resposta do req.


router.get ("/read", cparty.read_party)
   

router.put("/update/:id", cparty.update_party)
    

//delete não tem body
router.delete('/del/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    if (cparty.delete_party(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
    
})

module.exports = router