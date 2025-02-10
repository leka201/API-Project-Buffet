// class sempre tem um construtor(que é uma função)
'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../config/database');

class Party extends Model {};

Party.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [13, 50]
        }
    },

    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    tipo_pag: {                          
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 10]
        }
    },

    cpf_cnpj: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [11,16]
        }
    },

    nome_cartao: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [13,30]
        }
    },

    numero_cartao: {
        type: DataTypes.STRING,
        allowNull:true,
        validate: {
            len: [16, 20]
        }
    },
    validade: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            len: [10,15] 
        }
    },

    CVV: {
        type: DataTypes.NUMBER,
        allowNull:true,
        validate: {
            len: [3,3]
        }
    },

    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            len: [ 1,1000]
        }
    },

}, {
    sequelize,
    modelName:'Party',
    timesTemp:true
});

module.exports = Party;

//class Party{
    //constructor(pid, ptype, pdecorations, pitems, pfood){
        //this.id = pid
        //this.type = ptype
        //this.decorations = pdecorations
        //this.items = pitems
        //this.food = pfood

        // colocar outros controladores 
    //}
//}