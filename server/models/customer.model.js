import mongoose from "mongoose";
import Seller from "./seller.model.js";
import CartItem from "./cartItems.models.js";

const CustomerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: Number,
      },
      street: {
        type: String,
      },
    },
    userType: {
      type: String,
      enum: ["Customer", "Admin"],
      default: "Customer",
    },
    followingSellers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Seller,
      },
    ],
    profilePicture: {
      type: String,
    },
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: CartItem,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Customer", CustomerSchema);
