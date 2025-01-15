const { name } = require("ejs");
const db = require("../modules/index");
const bodyParser = require("body-parser");
const crudServices = require("../services/crudServices");
const gethomepage = async (req, res) => {
  try {
    return res.render("homepage.ejs");
  } catch (error) {
    console.log(error);
  }
};
const get_info = async (req, res) => {
  try {
    return res.render("get_info.ejs");
  } catch (error) {
    console.log(error);
  }
};
const getcrud = (req, res) => {
  return res.render("crud.ejs");
};
const getIntroduction = (req, res) => {
  return res.render("introduction.ejs");
};
const postcrud = async (req, res) => {
  return res.send("Data received");
};
const get_data = async (req, res) => {
  return res.send("Hello");
};
const getDevices = async (req, res) => {
  return res.render("AddDevices.ejs");
};
const DevicesAdded = (req, res) => {
  crudServices.addDevices(req.body);
  console.log(req.body);
  return res.send("hello");
};
// Xuất các chức năng
module.exports = {
  gethomepage,
  getcrud,
  postcrud,
  get_info,
  get_data,
  getIntroduction,
  getDevices,
  DevicesAdded,
};
