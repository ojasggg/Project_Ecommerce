import mongoose from "mongoose";
import Product from "./product.model.js";
import Customer from "./customer.model.js";

const ProductRatingSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer,
    },
    rating: {
      type: Number,
      required: true,
    },
    reviewComment: {
      type: String,
    },
    reviewPictures: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProductRating", ProductRatingSchema);
