const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  brand: { type: String },
  name: { type: String },
  cost: { type: Number },
  modelNo: { type: String },
  images: { type: String },
  rating: { type: Number },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
