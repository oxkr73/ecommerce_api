const connectionDB = require("../config/connection");
const Carts = require("../models/cartsSchema");

let cartsController = {
  getUserCarts: (req, res) => {
    Carts.find({ user_id: req.params.id })
      .then(cart => {
        //console.log(cart);
        if (cart != null) {
          res.json(cart);
        } else {
          res.send("Error de ID");
        }
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  getCart: (req, res) => {
    Carts.findOne({ _id: req.params.id })
      .then(cart => {
        //console.log(cart);
        if (cart != null) {
          res.json(cart);
        } else {
          res.send("Error de ID");
        }
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  createCart: (req, res) => {
    const cart = new Carts(req.body);
    Carts.create(cart)
      .then(cart => {
        res.json(cart);
      })
      .catch(err => {
        res.send(err.message);
      });
  }
};

module.exports = cartsController;
