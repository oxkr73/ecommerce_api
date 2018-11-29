const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsListSchema = require("./productsListSchema");

const cartsSchema = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  state: {
    type: String,
    default: "add_to_cart"
  },
  user_id: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  prod_list: [productsListSchema]
});

const Carts = mongoose.model("carts", cartsSchema);

module.exports = Carts;
