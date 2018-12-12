const connectionDB = require("../config/connection");
const Products = require("../models/productsSchema");

let productsController = {
  getAll: (req, res) => {
    Products.find({})
      .then(products => {
        console.log(`Hay ${products.length} productos`);
        res.json(products);
      })
      .catch(console.error.bind(console, "error: "));
  },
  getOne: (req, res) => {
    Products.findOne({ sku: req.params.sku })
      .then(product => {
        if (product != null) {
          res.json(product);
        } else {
          res.send("Error de sku");
        }
      })
      .catch(console.error.bind(console, "error: "));
  },
  getOneById: (req, res) => {
    Products.findOne({ _id: req.params.id })
      .then(product => {
        if (product != null) {
          res.json(product);
        } else {
          res.send("Error de sku");
        }
      })
      .catch(console.error.bind(console, "error: "));
  },
  getAllByCategory: (req, res) => {
    Products.find({ categories: req.params.category })
      .populate("categories")
      .then(products => {
        if (products != null) {
          res.json(products);
        } else {
          res.send("No se ha encontrado ningun producto");
        }
      })
      .catch(err => console.log(err));
  },
  getCatalog: (req, res) => {
    Products.find({ catalogs: { $in: [req.params.catalog] } })
      .then(products => {
        if (products != null) {
          res.json(products);
        } else {
          res.send("No se han encontrado productos en este catálogo");
        }
      })
      .catch();
  },
  create: (req, res) => {
    const product = new Products(req.body);

    Products.create(product)
      .then(product => {
        res.json(product);
      })
      .catch(console.error.bind(console, "error: "));
  },
  delete: (req, res) => {
    Products.deleteOne({ _id: req.params.id })
      .then(product => {
        if (product != null) {
          res.json(product);
        } else {
          res.send("Error de sku");
        }
      })
      .catch(console.error.bind(console, "error: "));
  },
  updateOne: (req, res) => {
    const updateData = req.body;
    Products.findOneAndUpdate({ _id: req.params.id }, updateData, {
      new: true
    })
      .then(product => {
        res.json(product);
      })
      .catch(console.error.bind(console, "error: "));
  }
};

module.exports = productsController;
