const express = require("express");
const auth = require("../middlewares/auth");
const productsController = require("../controllers/porductsController");

router = express.Router();

router.get("/products", productsController.getAll);

router.get("/products/:sku", productsController.getOne);

router.get("/products/id/:id", productsController.getOneById);

router.get("/products/category/:category", productsController.getAllByCategory);

router.get("/products/catalog/:catalog", productsController.getCatalog);

router.post("/products", auth, productsController.create);

router.put("/products/id/:id", auth, productsController.updateOne);

router.delete("/products/id/:id", auth, productsController.delete);

module.exports = router;
