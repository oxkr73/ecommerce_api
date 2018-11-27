const express = require("express");
const catalogsController = require("../controllers/catalogsController");

router = express.Router();

router.get("/", catalogsController.getMain);

router.get("/catalogs/:category", catalogsController.getCatalogCategory);

router.post("/catalogs", catalogsController.createCatalog);

router.put("/catalogs/:category", catalogsController.updateCatalogCategory);

router.delete("/catalogs/:category", catalogsController.deleteCatalogCategory);

module.exports = router;
