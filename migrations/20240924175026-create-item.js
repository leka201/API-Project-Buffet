'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Itens',{
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
        type: Sequelize.DECIMAL, 
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dimenson: { 
        allowNull: false,
        type: Sequelize.STRING, 
      },
      creatAT: {
        allowNull: false,
        type: Sequelize.DATE, 
      },
      updateAT: {
        allowNull: false,
        type: Sequelize.DATE, 
      },
    });
  },
  async down (queryInterface, Sequelize) {
    
  
    await queryInterface.dropTable('Itens');
     
  }
};
