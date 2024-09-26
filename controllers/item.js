const Item = require ("../models/item")


async function create_item(name ,price , color, dimenson ){
    const item = await Item.create ({name,price,color ,dimenson})

    return item
}
 async function read_item(){
    return await  Item.findAll()
}

async function up_id(id,name,price, color , dimenson){
  const item = await Item.findByPK(id);

  if(!Item ){
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

    const item = await Item.findByPk(id)

    if(!item){
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
