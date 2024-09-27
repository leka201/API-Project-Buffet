'use strict'
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/database')

class User extends Model{}
    
User.init({
    id:{
        primaryKey:true, 
        type: DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true
    },
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    cep:  DataTypes.STRING,
    born: DataTypes.STRING,
    gender:DataTypes.STRING

},
{
    sequelize,
    modelName:'User',
    timesTamps:true 
})





 module.exports = User