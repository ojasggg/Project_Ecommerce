import mongoose from "mongoose";
// import Seller from "./seller.model.js";

const CategorySchema = new mongoose.Schema(
  {
    categoryType: {
      type: String,
      required: true,
    },
    categoryListedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
