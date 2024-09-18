const express = require('express')
const router = express.Router()
const cparty = require ('../controllers/party')


//vai para routes
router.post("/create", (req,res) =>{
    const {type, decorations, items, food} = req.body

    if(!type || !decorations || !items || !food){

        return res.status(400).json({ message: 'todos os campos são obrigatórios'}); //usar de acordo com a tabela de status http
}

    const party= cparty.create_party (type, decorations, items, food)

    return res.status(200).json({ message: 'Sucesso', party: party});
}) //req vai vim td que vc mandar no body vai estar dentro dela e a res é a resposta do req.


router.get ("/read", (req, res) =>{
    return res.status(200).json({ 
        message: "Sucesso", list_party: cparty.read_party()
    })
})


router.put("/update/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const {type, food} = req.body

    let retorno = cparty.update_party(id, type, food)
    return res.status(retorno.status).json(retorno.msg)
})

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