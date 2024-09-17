var itens = []

function create_item(name ,price , color, dimenson ){
    let id = 0
    if (itens .length > 0 ) id = itens [itens.length -1].id +1

    const item = {
        "id": id,
        "name": name,
        "price": price,
        "color": color,
        "dimenson": dimenson
              
    }
        itens.push(item)
        return item
}
function read_item{
    return itens
}

function up_id(id,name,price, color , dimenson){
  let idx =  itens.findIndex(item => item.id == id)

  if(idx == -1 ){
    return {status:404, msg: "Não achei "}
  }

  if(name) itens[idx].name = name

  if(price) itens[idx].price = price

  if(color) itens[idx].color = color

  if(dimenson) itens[idx].dimenson = dimenson
   
  return{status : 200 , msg: itens[idx]}
}

function delete_item(id){
    let idx = itens.findIndex(item =>item.id === id ) 
    if(idx == -1){
        return false
    }
    itens.splice(idx , 1 )
    return true
}

module.exports = {
    create_item,
    up_id,
    delete_item,
    read_item

}
