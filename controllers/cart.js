const Cart = require('../models/cart')

var carts = []
async function create_cart( items ,clientId){
 
    const cart = await Cart.create({clientId})

    
    carts.push(cart)
    return cart
}

async function read_cart(){
    return await Cart.findAll()
}
 
async function up_id(id,items ,client_id){
  let cart =  await Cart.findByPk(id)
 
  if(!cart){
    return {status:404, msg: "não tem item "}
  }
 
  if(items) cart.items = items
 
  if(client_id) cart.client_id = client_id

  await cart.save()
   
  return{status : 200 , msg: cart}
}

async function delete_cart(id){
    let cart = await Cart.findByPk(id)
    if(!cart){
        return false
    }
    await cart.destroy()
    return true
}

module.exports = {
    create_cart,
    read_cart,
    up_id,
    delete_cart
}