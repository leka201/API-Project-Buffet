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
        allowNull: false,
        type: Sequelize.STRING, 
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dimenson: { 
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
