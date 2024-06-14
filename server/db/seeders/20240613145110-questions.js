'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          img: '/games/dota2.png',
          answer: 'dota2',
          themeId: 1,
        },
        {
          img: '/games/minecraft.png',
          answer: 'minecraft',
          themeId: 1,
        },
        {
          img: '/games/gta.png',
          answer: 'gta',
          themeId: 1,
        },
        {
          img: '/games/fortnite.png',
          answer: 'fortnite',
          themeId: 1,
        },
        {
          img: '/games/neighbor.png',
          answer: 'как достать соседа',
          themeId: 1,
        },
        {
          img: '/films/greenbook.png',
          answer: 'зеленая книга',
          themeId: 2,
        },
        {
          img: '/films/pulpdiction.png',
          answer: 'криминальное чтиво',
          themeId: 2,
        },
        {
          img: '/films/darkknight.png',
          answer: 'темный рыцарь',
          themeId: 2,
        },
        {
          img: '/films/watchmen.png',
          answer: 'хранители',
          themeId: 2,
        },
        {
          img: '/films/jaba.png',
          answer: 'звездные войны',
          themeId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
