import React from "react";
import CartUser from "./CartUser";
import ShippingAddress from "./ShippingAddress";

const CartDetails = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* User Logged In detail */}
      <CartUser fullname={"Ojash Gurung"} number={"+977-9803498909"} />
      <ShippingAddress
        address={"Battisputali, Samyog Gali"}
        city={"Kathmandu"}
        country={"Nepal"}
        doFlex={true}
      />
    </div>
  );
};

export default CartDetails;
