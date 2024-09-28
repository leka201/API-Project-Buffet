'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Parties', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      decorations:{
        allowNull: true,
        type: Sequelize.STRING
      },
      items:{
        allowNull: true,
        type: Sequelize.STRING
      },
      food:{
        allowNull: true,
        type: Sequelize.STRING
      },
      createAt:{
        allowNull:false,
        type: Sequelize.DATE
      },
      updateAt:{
        allowNull:false,
        type:Sequelize.DATE
      }
      
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Parties')
  }
};
