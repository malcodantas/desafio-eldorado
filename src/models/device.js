const Sequelize = require('sequelize')
const database = require('../database')
const Category = require('./category')

const Device = database.define('device', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  category: {
    type: Sequelize.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  },
  color: {
    type: Sequelize.STRING(16)
  },
  partNumber: {
    type: Sequelize.INTEGER
  }
})
module.exports = Device
