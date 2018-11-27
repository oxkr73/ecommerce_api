const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/productsRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", productsRoutes);

app.listen(3000);
