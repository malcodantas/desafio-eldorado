'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'malco',
      password: '$2a$10$uH8Cc97Ic0WcEyLozL1t9ulMhYaqKQXioNFBeCKRSUsusP8XPo3Qe'
    }], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
