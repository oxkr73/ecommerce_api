const connectionDB = require("../config/connection");
const Carts = require("../models/cartsSchema");

let cartsController = {
  createCart: (req, res) => {
    const cart = new Carts(req.body);
    Carts.create()
      .then(cart => {})
      .catch(err => {
        res.send(err.message);
      });
  }
};

module.exports = cartsController;
