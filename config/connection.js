const config = require("./config");
const mongoose = require("mongoose");
const connectionDB = mongoose
  .connect(
    config.db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("connection to DB established"))
  .catch(console.error.bind(console, "error: "));

exports = connectionDB;
