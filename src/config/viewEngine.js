const path = require("path"); // import path from node_modules
const express = require("express"); // import express from express
const configViewEngine = (app) => {
  app.set("views", path.join("./src/views")); // khai bao duong linh dan den file ejs
  app.set("view engine", "ejs");
  app.use(express.static(path.join("./src", "public"))); // khai bao duong link dan den thu muc tinh
};
module.exports = configViewEngine;
// khai bao duong link du lieu
