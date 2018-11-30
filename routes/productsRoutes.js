const express = require("express");
const productsController = require("../controllers/porductsController");

router = express.Router();

router.get("/products", productsController.getAll);

router.get("/products/:sku", productsController.getOne);

router.get("/products/category/:category", productsController.getAllByCategory);

router.post("/products", productsController.create);

router.put("/products/:sku", productsController.updateOne);

router.delete("/products/:sku", productsController.delete);

module.exports = router;
