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
      createdAt: {  // Corrigido para "createdAt"
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {  // Corrigido para "updatedAt"
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parties');
  },
};