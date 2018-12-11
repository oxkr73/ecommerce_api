const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: { type: String, required: true },
  ancestors: { type: Array },
  parent: { type: String }
});

const Category = mongoose.model("categories", categoriesSchema);

module.exports = Category;
