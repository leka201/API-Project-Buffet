'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Item extends Model {}
Item.init(
  {
    name: DataTypes.STRING, 
    price: DataTypes.DECIMAL,
    color: DataTypes.STRING,
    dimension: DataTypes.STRING 
  },
  { sequelize, modelName: 'Item' }
);

module.exports = Item; 
