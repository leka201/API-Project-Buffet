const { AsyncLocalStorage } = require('async_hooks')
const User = require('../models/user')



async function create_users(name, pass, res, cep, email, born, gender) {
    
    if(pass.length < 8 ){

        return res.status(301).json({
            Message: 'Essa senha tem q possuir 8 ou mais caracteres  '
        })
    }
    

   if(cep.length == 8 ){

        return res.status(301).json({
            message: 'Esse campo tem q possuir exatamente 8 carcteres'
        })
    }
    if(email.length = '@'){

        return res.status(301).json({ 
            message:'Obrigatorio possuir um @ nesse campo'})
    }

    if(age(born) < 18){
        return res.status(301).json({
        message:'sua idade não é maior que 18 anos'
        })
    }


    if (!(gender == 'mulher' || gender== 'homem' || gender == 'outro')){

        return res.status(301)({
            message:'desculpa mas escolha um dos tres: mulher, homem, outro'
        })
    }

        const user = await User.create({name, pass, res, cep, born, gender})

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


   

async function read_users(){

    return await User.findAll()

}

async function update_user(id, login, pass){
    const user = await User.findByPk(id)


    if(!user) {
        
        return {status: 404, msg: "nao encontrado"}
    }
       
    if(login) user.login = login
    if(pass) user.pass = pass

    return {status: 200, msg: user}
}

async function delete_user(id){
    const user = await User.findByPk(id)
console.log(user)
    if(!user) {
        
        return false
    }
    await user.destroy()
    return true
  
}

module.exports = {create_users, update_user, delete_user, read_users}