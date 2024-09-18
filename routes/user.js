const express = require('express')
const router = express.Router()
const cuser = require('../controllers/user')

router.post("/create", ( req, res ) => {
    const {login, password } = req.body   

    if(!login || !password){
        return res.status(408).json({ message: 'Esses seguintes campos nao forma prenchidos: password'})
    }

    const user = cuser.create_users (login, password)

    return res.status(200).json({
        message: 'sucesso',user: user
    })
})

router.get("/read", (req, res) => {
    return res.status(200).json({
        message: 'Sucesso',
        lista: cuser.read_users()
    });
});

router.put("/upt/:id", (req, res)  => {

    const id = parseInt(req.params.id)

    const {login, pass} = req.body

    let retorno = cuser.update_user(id, login, pass)

    return res.status(retorno.status).json(retorno.msg)

})

router.delete("/del/:id", (req, res) => {
    const id = parseInt(req.params.id)
    if(cuser.delete_user(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }

} )

module.exports = router