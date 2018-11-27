const connectionDB = require("../config/connection");
const Products = require("../models/productsSchema");

let productsController = {
  getAll: (req, res) => {
    Products.find({})
      .then(products => {
        console.log(products);
        res.json(products);
      })
      .catch(console.error.bind(console, "error: "));
  },
  getOne: (req, res) => {
    Products.findOne({ sku: req.params.sku })
      .then(products => {
        console.log(products);
        if (products != null) {
          res.json(products);
        } else {
          res.send("Error de sku");
        }
      })
      .catch(console.error.bind(console, "error: "));
  },
  create: (req, res) => {
    const product = new Products(req.body);

    Products.create(product)
      .then(product => {
        console.log(product);
        res.json(product);
      })
      .catch(console.error.bind(console, "error: "));
  },
  delete: (req, res) => {
    Products.deleteOne({ sku: req.params.sku })
      .then(products => {
        console.log(products);
        if (products != null) {
          res.json(products);
        } else {
          res.send("Error de sku");
        }
      })
      .catch(console.error.bind(console, "error: "));
  },
  updateOne: (req, res) => {
    const updateData = req.body;
    Products.findOneAndUpdate({ sku: req.params.sku }, updateData, {
      new: true
    })
      .then(product => {
        res.json(product);
      })
      .catch(console.error.bind(console, "error: "));
  }
};

module.exports = productsController;
