'use strict'

async function up (queryInterface, Sequelize) {
  await queryInterface.createTable('Carts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
    clientId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}

async function down (queryInterface, Sequelize) {
  await queryInterface.dropTable('Carts')
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up,
  down
}
