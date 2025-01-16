const express = require("express");
const router = express.Router();
const {
  gethomepage,
  getcrud,
  postcrud,
  get_info,
  get_data,
  getIntroduction,
  getDevices,
  DevicesAdded,
  notice,
} = require("../controler/homeCotroller");
let initwebroutes = (app) => {
  router.get("/", gethomepage);
  router.get("/crud", getcrud);
  router.post("/create_user", postcrud);
  router.get("/get_data", get_data);
  router.get("/get_info", get_info);
  router.get("/introduction", getIntroduction);
  router.get("/addDevices", getDevices);
  router.post("/deviceinfo", DevicesAdded);
  router.get("/notice", notice);
  return app.use("/", router);
};

module.exports = initwebroutes;
