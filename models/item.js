'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Item extends Model {}
Item.init(
  {
    name: DataTypes.STRING, 
    decorations: DataTypes.STRING,
    items: DataTypes.STRING,
    food: DataTypes.STRING 
  },
  { sequelize, modelName: 'Item', timestamps: true,}
);

module.exports = Item; 
