const express = require("express");
const productsController = require("../controllers/porductsController");

router = express.Router();

router.get("/products", productsController.getAll);

router.get("/products/:sku", productsController.getOne);

router.get("/products/id/:id", productsController.getOneById);

router.get("/products/category/:category", productsController.getAllByCategory);

router.get("/products/catalog/:catalog", productsController.getCatalog);

router.post("/products", productsController.create);

router.put("/products/id/:id", productsController.updateOne);

router.delete("/products/id/:id", productsController.delete);

module.exports = router;
