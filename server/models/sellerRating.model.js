import mongoose from "mongoose";
import Seller from "./seller.model.js";
import Customer from "./customer.model.js";

const SellerRatingSchema = new mongoose.Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,,
    ref : Seller
  },
  customerId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : Customer
  },
  rating : {
    type : Number,
    required : true
  }
},{
    timestamps : true
});

export default mongoose.model("SellerRating", SellerRatingSchema)