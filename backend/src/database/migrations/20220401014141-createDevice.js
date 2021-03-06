'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('devices', {
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      color: {
        type: Sequelize.STRING(16),
        validate: {
          is: ['^[a-z]+$', 'i'] // somente letras
        }
      },
      partNumber: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('devices')
  }
}
