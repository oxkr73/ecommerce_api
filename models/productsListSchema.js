const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsListSchema = new Schema({
  sku: { type: String, required: true }
});

const ProductsList = mongoose.model("prods_lists", productsListSchema);

module.exports = ProductsList;
