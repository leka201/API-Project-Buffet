const Cart = require('../models/cart')
const User = require('../models/user')

async function create_cart( items ,clientId, res){
    let user = await User.findByPk(clientId)

    if(!user){
        return res.status(404).json({
            message: 'Usúario não encontrado'
        })
    }
 
    const cart = await Cart.create({clientId})

    return res.status(200).json({
        message: 'Carrinho criado', cart_created: cart
    })
}

async function read_cart(req,res){
    let cart = await Cart.findAll()
    return res.status(200).json({ message: 'item adicionado ', cart: cart})
}
 
async function up_id(id,items , res){
  let cart =  await Cart.findByPk(id)

  if(!cart){
    return res.status(404).json({
        message: 'Carrinho não encontrado'
    })
  }
  
  return res.status(200).json({
    message: 'Sucesso',
    carrinho_encontrado: cart
})

 
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