"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("urlDevices", {
      //     url: DataTypes.STRING,
      //   passWifi: DataTypes.STRING,
      //   nameWifi: DataTypes.STRING,
      //   optionsModel: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        type: Sequelize.STRING,
      },
      passWifi: {
        type: Sequelize.STRING,
      },
      nameWifi: {
        type: Sequelize.STRING,
      },
      optionsModel: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("urlDevices");
  },
};
