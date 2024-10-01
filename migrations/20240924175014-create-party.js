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
      decorations: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      items: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      food: {
        allowNull: false,
        type: Sequelize.STRING,
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