import mongoose from "mongoose";
import Customer from "./customer.model.js";

const SellerSchema = new mongoose.Schema(
  {
    sellerName: {
      type: String,
      required: true,
      unique: true,
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
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: Customer }],
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
