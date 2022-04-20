const { Sequelize } = require('sequelize')
const database = require('../database')
const Category = require('./category')

const Device = database.define('device', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  // category: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Category,
  //     key: 'id'
  //   }
  // },
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
}, {
  timestamps: false
})
Device.belongsTo(Category, {
  constraint: true
  // foreignKey: 'categoryId'
})
module.exports = Device
