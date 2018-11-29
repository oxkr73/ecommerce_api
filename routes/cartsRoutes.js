const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/cartsController");

routes.get("/cart/:id", cartsController.getCart);
routes.get("/cart/user/:id", cartsController.getUserCarts);
routes.post("/cart", cartsController.createCart);

module.exports = routes;
