import mongoose from "mongoose";

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
        default: false,
      },
      discountPercent: {
        type: Number,
        default: 0,
      },
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    productPictures: {
      type: [String],
      // required : true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    listedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
