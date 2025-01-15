"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class urlDevices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  urlDevices.init(
    {
      url: DataTypes.STRING,
      passWifi: DataTypes.STRING,
      nameWifi: DataTypes.STRING,
      optionsModel: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "urlDevices",
    }
  );
  return urlDevices;
};
