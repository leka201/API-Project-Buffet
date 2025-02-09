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
        type: sequelize.STRING,
      },

      nome_cartao: {
        allowNull: true,
        type: sequelize.STRING
      },

      numero_cartao: {
        allowNull: true,
        type: sequelize.NUMBER
      },

      validade: {
        allowNull: true,
        type: sequelize.DATE
      },

      CVV: {
        allowNull: true,
        type: sequelize.NUMBER
      },

      valor: {
        allowNull: true,
        type: sequelize.NUMBER
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