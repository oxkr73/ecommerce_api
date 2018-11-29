const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsListSchema = new Schema({
  sku: { type: String, required: true },
  cant: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true }
});

//const ProductsList = mongoose.model("prods_list", productsListSchema);

module.exports = productsListSchema;
