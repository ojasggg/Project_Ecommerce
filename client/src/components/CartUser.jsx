import React from "react";

const CartUser = ({ fullname, number }) => {
  return (
    <div className="flex p-4 border border-black/20 rounded-xl items-center justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h4 className="text-[18px] font-primary text-black/60">Login</h4>
        </div>
        <div className="flex gap-4 items-center text-black font-bold text-[14px]">
          <p>{fullname}</p>
          <p>{number}</p>
        </div>
      </div>
      <button className="bg-gray/20 p-4 rounded-lg text-sm">Change</button>
    </div>
  );
};

export default CartUser;
