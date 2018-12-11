const express = require("express");
const routes = express.Router();
const cartsController = require("../controllers/cartsController");

routes.get("/cart/:id", cartsController.getCart);
routes.get("/cart/user/:id", cartsController.getUserCarts);
routes.post("/cart", cartsController.createCart);
routes.put("/cart/:id", cartsController.updateCart);
routes.delete("/cart/delete/:id", cartsController.deleteCart);

module.exports = routes;
