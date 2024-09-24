'use strict';

const { sequelize } = require('../models/party');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Partys', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      decorations:{
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.STRING
      },
      items:{
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.STRING
      },
      food:{
        allowNull: false,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.STRING
      },
      createAt:{
        allowNull:false,
        type: Sequelize.DATE
      },
      updateAT:{
        allowNull:false,
        type:Sequelize.DATE
      }
      
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Partys')
  }
};
