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
      type: Sequelize.STRING,
      allowNull:true
  },
    cpf:{
      type: Sequelize.STRING,
      allowNull:true
  },
    nome_do_proprietario:{
      type: Sequelize.STRING,
      allowNull:true
  },
    numero_do_cartão:{
      type: Sequelize.STRING,
      allowNull:true
  },
    validade:{
      type: Sequelize.STRING,
      allowNull:true
  },
    CVV:{
      type: Sequelize.STRING,
      allowNull:true
  },
    parcelas:{
      type: Sequelize.STRING,
      allowNull:true
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
