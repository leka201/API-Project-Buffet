'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Items',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING, 
      },
      decorations: {
        allowNull: true,
        type: Sequelize.STRING
      },
      items: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      food: { 
        allowNull: true,
        type: Sequelize.STRING, 
      },
      createdAT: {
        allowNull: false,
        type: Sequelize.DATE, 
      },
      updatedAT: {
        allowNull: false,
        type: Sequelize.DATE, 
      },
    });
  },
  async down (queryInterface, Sequelize) {
    
  
    await queryInterface.dropTable('Items');
     
  }
};
