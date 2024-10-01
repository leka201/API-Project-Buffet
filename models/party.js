// class sempre tem um construtor(que é uma função)
'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../config/database');

class Party extends Model {};

Party.init({
    decorations: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    items: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    food: {
        type: DataTypes.STRING,
        allowNull: false,
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