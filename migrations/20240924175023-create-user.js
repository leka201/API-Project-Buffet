'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:Sequelize.INTEGER
        },
        login:{
            allowNull: false,
            type: Sequelize.STRING
        },
        password:{
            allowNull: false,
            type: Sequelize.STRING
        },
        cep:{
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type:Sequelize.STRING
        },
        email:{
            allowNull: false,
            type: Sequelize.STRING
        },
        born:{
            allowNull: false,
            type: Sequelize.DATE
        },
        gender:{
            llowNull: false,
            type: Sequelize.STRING
        },
        createdAt:{
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt:{
            allowNull: false,
            type: Sequelize.DATE
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
