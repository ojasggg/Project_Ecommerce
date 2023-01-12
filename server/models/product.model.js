import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrimaryCategory: {
    type: String,
    enum: ["Mens", "Womens", "Kids", "All"],
    required: true,
  },
  product
});
