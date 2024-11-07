const { AsyncLocalStorage } = require('async_hooks')
const User = require('../models/user')
const {op, where} = require ("sequelize")


async function create_users(req,res) {
    const {login, password, cep, email, born, gender} = req.body   

    if(!login || !password ||!email || !cep || !born || !gender){
        return res.status(408).json({ message: 'Esses seguintes campos nao forma prenchidos: password'})
    }

    if(password.length < 8 ){
        return res.status(301).json({
            Message: 'Essa senha tem q possuir 8 ou mais caracteres  '
        })
    }
    
    if(cep.length == 8 ){
        return res.status(301).json({
            message: 'Esse campo tem q possuir exatamente 8 carcteres'
        })
    }
    
    if (!email.includes('@')) {
        return res.status(301).json({ 
            message: 'Obrigatório possuir um @ nesse campo.'
        });
    }

    if(age(born) < 18){
        return res.status(301).json({
            message:'sua idade não é maior que 18 anos'
        })
    }

    if (!(gender === 'mulher' || gender === 'homem' || gender === 'outro')) {
        return res.status(400).json({
            message: 'Desculpa, mas escolha um dos três: mulher, homem, outro'
        });
    }
    const user = await User.create({login, password,  cep, email,  born, gender })

    return res.status(200).json({
        message: 'Sucesso meu campeão',user: user
    })
}

function age(date) {
    const
      birthdate = new Date(date),
      today = new Date();
  
    let age = today.getFullYear() - birthdate.getFullYear();
      
    if (birthdate.getDate() >= today.getDate() && birthdate.getMonth() >= today.getMonth()) age--;
  
    return age;
  }


async function show_user (req,res) {
    const id = parseInt(req.params.id)

    const user = await User.findByPk(id)
    
    if(!user){
        return res.status(404).json({
            message: "não encontrado"
        })
    }

        return res.status(202).json({
            message: "Encontrei",
            db:user
        })
        
    }

async function read_users(req, res){
    const {login} = req.query

    const condition = {}
    
    
    if(login){
        condition.login = { [op.like]:`%${login}%`} 
    }

    return res.status(200).json({ 
        message: 'encontrado ', 
        db: await User.findAll({
            where:Object.keys(condition).length > 0?
            condition:undefined
        })
    })
}

async function update_user(req, res){
    const id = parseInt(req.params.id)

    const {login, pass} = req.body

    

    const user = await User.findByPk(id)


    if(!user) {
        
        return {status: 404, msg: "nao encontrado"}
    }
       
    if(login) user.login = login
    if(pass) user.pass = pass

    return {status: 200, msg: user}
}

async function delete_user(req, res){
    const id = parseInt(req.params.id)
   
    const user = await User.findByPk(id)
    if(!user) {
        
        return false
    }
    await user.destroy()
    return true
}


module.exports = {create_users, update_user, delete_user, read_users, show_user }