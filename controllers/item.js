const Item = require ("../models/item")
var itens = []

async function create_item(name ,price , color, dimenson ){
    const item = await Item.create ({name,price,color ,dimenson})

    return item
}
 async function read_item(){
    return await  itens.findAll()
}

async function up_id(id,name,price, color , dimenson){
  const item = await item.findByPK(id)

  if(!item ){
    return {status:404, msg: "Não achei "}
  }

  if(name) item.name = name
  if(price) item.price = price
  if(color) item.color = color
  if(dimenson) item.dimenson = dimenson

  await item.save()
  return{status : 200 , msg: item}
}

 async function delete_item(id){

    const item = await item.findByPK(id)

    if(item){
        return false
    }
    await item.destroy()
    return true
}

module.exports = {
    create_item,
    up_id,
    delete_item,
    read_item

}
