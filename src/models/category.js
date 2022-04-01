const Sequelize = require('sequelize')
const database = require('../database')

const Category = database.define('category', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(16),
    allowNull: false
  }
})
module.exports = Category
