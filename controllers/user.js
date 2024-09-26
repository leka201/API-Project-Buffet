const { AsyncLocalStorage } = require('async_hooks')
const User = require('../models/user')



async function create_users(name,pass) {
    const user = await User.create({name,pass})

    return user
}


async function read_users(){

    return await User.findAll()

}

async function update_user(id, login, pass){
    const user = await User.findByPk(id)


    if(user) {
        
        return {status: 404, msg: "nao encontrado"}
    }
       
    if(login) user.login = login
    if(pass) user.pass = pass

    return {status: 200, msg: user}
}

async function delete_user(id){
    const user = await User.findByPk(id)

    if(user) {
        
        return false
    }
    await user.destroyer()
    return true
  
}

module.exports = {create_users, update_user, delete_user, read_users}