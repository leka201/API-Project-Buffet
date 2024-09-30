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

 async function update_party(id, decorations, items,food, req, res){


    let retorno =  await Party.findByPk(id);
    let {decorations, items, food} = req.body

    retorno.decorations = decorations;
    retorno.items = items;
    retorno.food = food;

    await retorno.save();

    return res.status(retorno.status).json(retorno.msg)
    
}

//await party.save();

 async function delete_party (id){
    const party = await Party.findByPk(id);
    if(!party){
        return {status: 404, msg: "Não encontrado"};
    }

    await party.destroy();

    return true;
}


module.exports = {
    create_party,
    read_party,
    update_party,
    delete_party
};