const express = require("express");
const routes = express.Router();
const auth = require("../middlewares/auth");
const cartsController = require("../controllers/cartsController");

routes.get("/cart/:id", cartsController.getCart);

routes.get("/cart/user/:id", cartsController.getUserCarts);

routes.post("/cart", auth, cartsController.createCart);

routes.put("/cart/:id", auth, cartsController.updateCart);

routes.delete("/cart/delete/:id", auth, cartsController.deleteCart);

routes.put("/cart/checkout/:id", auth, cartsController.checkoutCart);

module.exports = routes;
