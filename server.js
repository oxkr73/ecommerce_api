const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const catalogsRoutes = require("./routes/catalogsRoutes");
const cartsRoutes = require("./routes/cartsRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", productsRoutes);
app.use("/", usersRoutes);
app.use("/", catalogsRoutes);
app.use("/", cartsRoutes);

app.listen(3000);
