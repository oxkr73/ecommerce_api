const connectionDB = require("../config/connection");
const Carts = require("../models/cartsSchema");

let cartsController = {
  getUserCarts: (req, res) => {
    Carts.find({ user_id: req.params.id })
      .then(cart => {
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
  },
  updateCart: (req, res) => {
    const updateData = req.body.prod_list[0];

    //Buscamos un carrito por su id
    Carts.findOne({
      _id: req.params.id
    })
      .then(cart => {
        if (cart != null) {
          let updatedCart = cart.prod_list;
          let productExist = false;

          //Solo si el producto que se le pasa existe, actualizamos su contenido
          for (const product of updatedCart) {
            if (product._id == updateData._id) {
              product.qty = updateData.qty;
              product.price = updateData.price;
              productExist = true;
            }
          }

          if (!productExist) {
            updatedCart.push(updateData);
          }

          //Actualizamos el carrito entero
          Carts.findOneAndUpdate(
            {
              _id: req.params.id
            },
            { $set: { prod_list: updatedCart } },
            {
              new: true
            }
          )
            .then(cart => {
              if (cart != null) {
                res.json(cart);
              } else {
                res.send("ID error. This cart doesn't exist yet");
              }
            })
            .catch(err => {
              res.send(err.message);
            });

          //res.json(cart);
        } else {
          res.send("ID error. This cart doesn't exist");
        }
      })
      .catch(err => {
        res.send(err.message);
      });
  },
  deleteCart: (req, res) => {
    Carts.updateOne({ _id: req.params.id }, { state: "deleted" })
      .then(cart => {
        if (cart != null) {
          res.json(cart);
        } else {
          res.send("ID Error. This cart doesn't exist");
        }
      })
      .catch(err => console.log(err.message));
  },
  checkoutCart: (req, res) => {
    //obtenemos un Cart activo
    Carts.findOne({ _id: req.params.id })
      .then(cart => {
        if (cart.state == "deleted" || cart.state == "paid") {
          throw new Error("This cart it's out of order");
        } else {
          //si hemos conseguido pagar, cambiamos su estado para mantener una copia
          Carts.updateOne({ _id: req.params.id }, { state: "paid" }).then(
            cart => {
              if (cart != null) {
                res.json(cart);
              } else {
                res.send("ID Error. This cart doesn't exist");
              }
            }
          );
        }
      })
      .catch(err => res.send(err.message));
  }
};

module.exports = cartsController;
