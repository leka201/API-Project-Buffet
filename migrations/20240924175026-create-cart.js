'use strict'

async function up (queryInterface, Sequelize) {
  await queryInterface.createTable('Carts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
