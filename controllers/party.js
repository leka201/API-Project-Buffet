const Party = require('../models/party')

 async function create_party(decorations, items, food){  

    //logica de validação dos dados.

    const party = await Party.create({decorations, items, food})  // especifica um objeto e o coloca dentro de uma variavel 

    return party
}

 async function read_party(){
    return await Party.findAll();
    
}

 async function update_party(id,food){

    const party = await Party.findByPk(id);

    if (!party){
        return {status: 404, msg: "Não encontrado"}};

    if(food)party.food = food;

    await party.save();

    return {status: 200, msg: partys};
}

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