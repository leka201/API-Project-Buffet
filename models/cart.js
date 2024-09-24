'use script'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Cart extends Model{}

Cart.init({
    items: DataTypes.STRING,
    client_id: DataTypes.STRING

},{
    sequelize, 
    modelName : 'Cart'
})

    
    /* colocar outros métodos aqui*/


module.exports = Cart

