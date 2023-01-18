import mongoose from "mongoose";
import Seller from "./seller.model.js";

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      isDiscount: {
        type: Boolean,
      },
      discountPercent: {
        type: Number,
      },
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    productPictures: {
      type: [String],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Category,
    },
    listedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Seller,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
