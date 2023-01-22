import mongoose from "mongoose";
// import Customer from "./customer.model.js";

const SellerSchema = new mongoose.Schema(
  {
    sellerName: {
      type: String,
      unique: true,
      required: true,
    },
    sellerEmail: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    sellerAddress: {
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: Number,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
    sellerPicture: {
      type: [String],
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    sellerContact: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Seller", SellerSchema);
