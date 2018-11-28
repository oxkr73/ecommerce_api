const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsList = require("./productsListSchema");

const cartsSchema = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  state: {
    type: String,
    default: "add_to_cart"
  },
  prod_list: [productsList]
});

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;
