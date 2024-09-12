const express = require('express');
const app = express()
const port = 3000;
app.use(express.json());


var users = []
function  create_users (login, password, birthofdate  ){

    let id= 0

    if(users.length > 0)
            id = users[users.length-1].id +1


    const user = {   
        "id":id,
        "login":login,
        "password": password,
        "birthofdate": birthofdate
    }
    users.push(user)
    return users
}

function update_user(id, login, pass){

  let idx = users.findIndex(user => user.id === id)
    
    if(idx == -1) {
        
        return {status: 404, msg: "nao encontrado"}
    }
       
    if(login) users[idx].login = login
    if(pass) users[idx].pass = pass

    return {status: 200, msg: users[idx]}
}

function delete_user(id){
    let idx = users.findIndex(user => user.id === id)
    if(idx == -1){
        return false
    }
  
    users.splice(idx, 1)
    return true
}








app.post("/user", ( req, res ) => {
    const {login, password } = req.body   

    if(!login || !password){
        return res.status(408).json({ message: 'Esses seguintes campos nao forma prenchidos: password'})
    }

    const user = create_users (login, password)

    return res.status(200).json({
        message: 'sucesso',user: user
    })
})

app.get("/user", (req, res) => {
   

    return res.status(200).json({
        message: 'Sucesso',
        lista: users
    });
});

app.put("/user/:id", (req, res)  => {

    const id = parseInt(req.params.id)

    const {login, pass} = req.body

    let retorno = update_user(id, login, pass)

    return res.status(retorno.status).json(retorno.msg)

})

app.delete("/user/:id", (req, res) => {
    const id = parseInt(req.params.id)
    if(delete_user(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("N~ao encontrado")
    }

} )




app.listen(port,() => {
    console.log(`run : http://localhost:${port}`)
})











