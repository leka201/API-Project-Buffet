const Cart = require('../models/cart')
const User = require('../models/user')
const {Op} = require('sequelize')

async function create_cart( req, res){
    const {items, clientId} = req.body

    //array é para indicar que tem que te um vetor
    //lenght é para indicar o tamanho do vetor, que ele tem que ser maior que 0

    if(!Array.isArray(items)|| !items.length || !clientId){
        return res.status(400).json({ message: 'não tem items!'})
        
    }
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

async function  show_cart(req, res){
    let id = parseInt(req.params.id)

    const cart = await Cart.findByPk(id)

    if(!cart){
        return res.status(404).json({
            message: "Não encontrado"
        })
    }

    return res.status(202).json({
        message: "Encontrado",
        db: cart
    })
}


async function read_cart(req,res){

    const{clientId} = req.query

    const condition = {}

    if(clientId){
        condition.clientId = {[Op.like]:`%${clientId}%`}
    }

    return res.status(200).json({ 
        message: 'item adicionado ', db:await Cart.findAll({
            where:Object.keys(condition).length > 0?
            condition:undefined
        })
    })
}
 
async function up_id(req, res){
    let cart =  await Cart.findByPk(id)

    const id = parseInt(req.params.id)
    const {items} = req.body

    if(!cart){
        return res.status(404).json({
            message: 'Carrinho não encontrado'
        })
    }
    
    if(items) {
        //fazer depois
        cart.items = items; cart.items = items; 
        await cart.save();
    }

    return res.status(203).json({
        message: 'Sucesso',
        carrinho_encontrado: cart
    })
}

async function delete_cart(req, res){
    const id = parseInt(req.params.id)
    let cart = await Cart.findByPk(id)

    if(!cart){
        return res.status(201).json("deletado com sucesso!")
    }

    await cart.destroy()
    
    return res.status(404).json("não encontrado")

}

module.exports = {
    create_cart,
    show_cart,
    read_cart,
    up_id,
    delete_cart
}