'use script'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class Cart extends Model{}

Cart.init({
    id:{
        primaryKey:true,
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true
    },
    clientId: DataTypes.STRING

},{
    sequelize, 
    modelName : 'Cart',
    timesTamps:true
})

    
    /* colocar outros métodos aqui*/


module.exports = Cart

