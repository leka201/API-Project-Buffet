const Party = require('../models/party')

 async function create_party(req, res){  

    //logica de validação dos dados.


    console.log(req.body);
    const {decorations, items, food} = req.body

    if(!decorations || !items || !food){

        return res.status(400).json({ message: 'todos os campos são obrigatórios'}); //usar de acordo com a tabela de status http
    }

    const party = await Party.create({decorations, items, food})  // especifica um objeto e o coloca dentro de uma variavel 
     
    return res.status(200).json({ message: 'Sucesso', party: party});
}

   async function read_party(req, res) {
    return res.status(200).json({ 
        message: "Sucesso", list_party: await Party.findAll()
    })
    
}

 async function update_party(req, res){

    let retorno =  await Party.findByPk(id);

    const {decorations, items, food} = req.body


    if(decorations) retorno.decorations = decorations;
    if(items)retorno.items = items;
    if(food)retorno.food = food;

    await retorno.save();

    return res.status(retorno.status).json(retorno.msg)
    
}

 async function delete_party (req,res){
    
    const id = parseInt(req.params.id)
    if (delete_party(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
    
}

 
    module.exports = {
         create_party,
         read_party,
         update_party,
         delete_party
         
        };