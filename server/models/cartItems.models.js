import mongoose from "mongoose";
import Product from "./product.model.js";
import Customer from "./customer.model.js";

const CartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Customer,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CartItem", CartItemSchema);
