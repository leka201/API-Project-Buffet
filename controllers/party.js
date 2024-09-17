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

function read_party(){
    return partys;
}

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

module.exports = {
    create_party,
    read_party,
    update_party,
    delete_party
}