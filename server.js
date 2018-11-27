const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/productsRoutes");
const catalogsRoutes = require("./routes/catalogsRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", productsRoutes);
app.use("/", catalogsRoutes);

app.listen(3000);
