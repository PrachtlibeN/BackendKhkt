const db = require("../modules/index.js");

let addDevices = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Log to verify input data
      console.log(data.url, data.Model);

      // Insert data into urlDevices table
      await db.urlDevices.create({
        url: data.url,
        passWifi: data.passWifi,
        nameWifi: data.namewifi,
        optionsModel: data.Model,
        // Sequelize should handle createdAt and updatedAt automatically if defined in the model
        // If not, you may need to explicitly set them like this:
        // createdAt: new Date(),
        // updatedAt: new Date()
      });

      resolve("added");
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = { addDevices: addDevices };
