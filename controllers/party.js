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
    const{name} = req.query

    const condition = ()

    if(name) {
        condition.name = { [Op.like]: `%${name}%`}
    }

    return res.status(200).json({
        message: "Sucesso", db: await party.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
        })
    })
    
}

 async function update_party(req, res){

    try{
        const{id}= req.params;
        const{decorations, items, food} = req.body;

        const party = await Party.findByPk(id);

        if(!party){
            return res.status(404).json({message: "Não encontrado"});
        }

        await party.update({decorations, items, food});

        res.status(200).json(party);
    } catch(error){
        console.error(error);
        res.status(500).json({message:"Erro no servidor"});
    }
}

 async function delete_party (req,res){
    
   try{ const{id} = req.params;

   const party = await Party.findByPk(id);

   if(!party){
     return res.status(404).json({message: "Não encontrado"});
   }

   await party.destroy();
   res.status(200).json({message: "Foi de base"})
    } catch(error){
        console.error(error);
        res.status(500).json({message: "Erro no servidor"});
    }
    
}

 
    module.exports = {
         create_party,
         read_party,
         update_party,
         delete_party
         
        };