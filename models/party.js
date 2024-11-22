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
            len: [13, 30]
        }
    },

    decorations: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [16, 30]
        }
    },
    items: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [16, 25]
        }
    },
    food: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [13, 20]
        }
    },
}, {
    sequelize,
    modelName:'Party'
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