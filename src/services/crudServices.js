const db = require("../modules/index.js");
let addDevices = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // url: DataTypes.STRING,
      // passWifi: DataTypes.STRING,
      // nameWifi: DataTypes.STRING,
      // optionsModel: DataTypes.STRING,
      console.log(data.url, data.Model);
      await db.urlDevices.create({
        url: data.url,
        passWifi: data.passWifi,
        nameWifi: data.namewifi,
        optionsModel: data.Model,
      });

      resolve("added");
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { addDevices: addDevices };
