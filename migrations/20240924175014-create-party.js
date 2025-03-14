const sequelize = require('../config/database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cart_id: {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        primaryKey: false,
        type: Sequelize.INTEGER,
      },
      tipo_pag: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      cpf_cnpj: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      nome_cartao: {
        allowNull: true,
        type: Sequelize.STRING
      },

      numero_cartao: {
        allowNull: true,
        type: Sequelize.STRING
      },

      validade: {
        allowNull: true,
        type: Sequelize.STRING
      },

      CVV: {
        allowNull: true,
        type: Sequelize.STRING
      },

      valor: {
        allowNull: true,
        type: Sequelize.STRING
      },

      createdAt: {  
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {  
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parties');
  },
};