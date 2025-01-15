const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();
const configViewEngine = require("./config/viewEngine");
const initwebroutes = require("./routes/web.js");
const connectDB = require("./config/connectDB.js");

// Cấu hình body-parser để xử lý dữ liệu gửi từ form
app.use(bodyParser.urlencoded({ extended: true })); // Xử lý dữ liệu x-www-form-urlencoded
app.use(bodyParser.json()); // Xử lý dữ liệu JSON

configViewEngine(app);
connectDB(app);
initwebroutes(app);

app.listen(process.env.PORT || 1888, () => {
  console.log("port", process.env.PORT);
});
