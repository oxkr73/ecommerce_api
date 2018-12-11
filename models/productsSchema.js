const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = require("./categoriesSchema");

const productsSchema = new Schema({
  sku: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  categories: { type: Schema.ObjectId, required: true, ref: "categories" },
  props: { type: Array },
  coupon: { type: String },
  status: { type: String }
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;
