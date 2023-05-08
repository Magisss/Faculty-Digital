'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    let incomes = require('../data/incomes.json')
    .map(el => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    await queryInterface.bulkInsert('Incomes', incomes, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Incomes', null, {});
  }
};
