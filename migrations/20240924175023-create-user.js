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
        name:{
            allowNull: false,
            type: Sequelize.STRING
        },
        pass:{
            allowNull: false,
            type: Sequelize.STRING
        },
        cep:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type:Sequelize.STRING
        },
        email:{
            allowNull: false,
            type: Sequelize.STRING
        },
        born:{
            allowNull: false,
            type: Sequelize.INTEGER
        },
        gender:{
            llowNull: false,
            type: Sequelize.INTEGER
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
    await queryInterface.dropTable('users');
  }
};
