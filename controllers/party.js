const Party = require('../models/party')
const {check, validationResult} = require('express-validator')
const { Op } = require('sequelize');

 async function create_party(req, res){  

    /*await check('name').isLength({min: 13, max: 30}).withMessage("não é um tipo de nome para um objeto para festas").run(req)
    await check('decorations').isLength({min: 13, max: 30}).withMessage("não é um tipo de decoração").run(req)
    await check('items').isLength({min: 16, max: 25}).withMessage("não é um tipo de item para festa").run(req)
    await check('food').isLength({min: 13, max: 20}).withMessage("não é um tipo de     food").run(req)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }*/

    console.log(req.body);
    const {name, decorations, items, food} = req.body
    if( !name|| !decorations || !items || !food){

        return res.status(400).json({ message: 'todos os campos são obrigatórios'}); //usar de acordo com a tabela de status http
    }

    const party = await Party.create({name, decorations, items, food})  // especifica um objeto e o coloca dentro de uma variavel 
     
    return res.status(200).json({ message: 'Sucesso', party: party});   
}

async function read_party(req, res) {
    const{name} = req.query

    const condition = {};

    if(name) {
        condition.name = { [Op.like]: `%${name}%`}
    }

    return res.status(200).json({
        message: "Sucesso", db: await Party.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
        })
    })
    
}

 async function update_party(req, res){

    try{
        const{id}= req.params;
        const{name, decorations, items,     food} = req.body;

        const party = await Party.findByPk(id);

        if(!party){
            return res.status(404).json({message: "Não encontrado"});
        }

        await party.update({ name, decorations, items, food});

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