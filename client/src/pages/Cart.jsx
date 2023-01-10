import React from "react";
import {
  Breadcrumbs,
  CartDetails,
  PaymentMethod,
  YourOrder,
} from "../components";

const Cart = () => {
  return (
    <div className="mx-20 xl:mx-60 py-6">
      <div>
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        <Breadcrumbs
          paths={["Home", "Men's Fashion"]}
          current={"Shopping Cart"}
          margin={2}
        />
      </div>
      <div className="flex mt-6">
        <div className="bg-bg_secondary p-6 rounded-xl flex-1">
          <CartDetails />
          <PaymentMethod />
        </div>
        <div>
          <YourOrder />
        </div>
      </div>
    </div>
  );
};

export default Cart;
