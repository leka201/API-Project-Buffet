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

function read_users (){
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

module.exports = {create_users, update_user, delete_user, read_users}