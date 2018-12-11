const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsListSchema = new Schema({
  sku: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number }
});

//const ProductsList = mongoose.model("prods_list", productsListSchema);

module.exports = productsListSchema;
