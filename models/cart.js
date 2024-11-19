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
    tipo_pagamento:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull:true,
        autoIncrement:false
    },
    cpf:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull:true,
        autoIncrement:false
    },
    nome_do_proprietario:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull:true,
        autoIncrement:false
    },
    numero_do_cartão:{
        primaryKey:true,
        type: DataTypes.INT,
        allowNull:true,
        autoIncrement:false
    },
    validade:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull:true,
        autoIncrement:false
    },
    CVV:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull:true,
        autoIncrement:false
    },
    parcelas:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull:true,
        autoIncrement:false
    },

    clientId: DataTypes.STRING

},{
    sequelize, 
    modelName : 'Cart',
    timesTamps:true
})

    
    /* colocar outros métodos aqui*/


module.exports = Cart

