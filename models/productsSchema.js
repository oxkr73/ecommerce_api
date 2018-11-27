const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  sku: String,
  name: String,
  price: Number,
  props: Array,
  categories: Array,
  coupon: String,
  status: String
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
