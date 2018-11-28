const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/cartsController");

routes.post("/cart", cartsController.createCart);

module.exports = routes;
