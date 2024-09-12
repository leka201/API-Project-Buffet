
//apointments significa agendamentos.
//scheduling significa agendamento.

const express = require ('express');
const app = express(); //é um construtor
const port = 3000; //rota de teste de api
app.use(express.json()); //fala q ele vai usar esse construtor

//vai ir para um controlador

var partys =[]
function create_party(type, decorations, items, food){  

    //logica de validação dos dados.

    let id = 0
    if(partys.length > 0){id = partys[partys.length -1].id+1}

    const party ={
        "id": id,
        "type": type,
        "decorations":decorations,
        "items":items,
        "food": food
    }

    partys.push(party)

    return party}

function update_party(id,type,food){

    let idx = partys.findIndex(party => party.id === id)

    if (idx == -1){
        return {status: 404, msg: "Não encontrado"}}

    if(type)partys[idx].type = type
    if(food)partys[idx].food = food

    return {status: 200, msg: partys[idx]}
}

function delete_party (id){
    let idx = partys.findIndex(party => party.id === id )
    if(idx == -1){
        return false
    }

    partys.splice(idx, 1)
    return true
}


//vai para routes
app.post("/party", (req,res) =>{
    const {type, decorations, items, food} = req.body

    if(!type || !decorations || !items || !food){

        return res.status(400).json({ message: 'todos os campos são obrigatórios'}); //usar de acordo com a tabela de status http
}

    const party= create_party (type, decorations, items, food)

    return res.status(200).json({ message: 'Sucesso', party: party});
}) //req vai vim td que vc mandar no body vai estar dentro dela e a res é a resposta do req.








app.get ("/party", (req, res) =>{
    return res.status(200).json({ 
        message: "Sucesso", list_party: partys
    })
})


app.put("/party/:id", (req,res) =>{
    const id = parseInt(req.params.id)
    const {type, food} = req.body

    let retorno = update_party(id, type, food)
    return res.status(retorno.status).json(retorno.msg)
})

//delete não tem body
app.delete('/party/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    if (delete_party(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
    
})

//não colocar nada abaixo disso

app.listen(port, () =>{

    console.log(`Run: http://localhost:${port}`) //uso de crase sempre q for fz uma extrapolação.

})





















































//cria_um_agendamento("Rua: Rua das Chacáras")
//cria_um_agendamento("Número: 2500")
//cria_um_agendamento("Bairro: Condominios")
//cria_um_agendamento("Data do Evento: 25/08/2024")
//cria_um_agendamento("Horário: 14h00")
//cria_um_agendamento("Duração: 3h00")
//console.log(agendamentos)