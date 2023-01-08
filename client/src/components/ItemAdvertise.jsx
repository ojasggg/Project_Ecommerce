import React from "react";

const ItemAdvertise = () => {
  return (
    <div className="flex gap-x-4 xl:gap-x-8 w-full h-[80px] p-4 items-center justify-center text-white bg-advertise rounded-xl">
      <div>
        <h5 className="text-xl">25% OFF</h5>
        <p className="text-sm text-white/40">
          If order over <span className="text-white">$120</span>
        </p>
      </div>
      <div className="text-[14px] font-medium bg-white/20 px-4 py-3 rounded-md">
        Until Oct 30,2022
      </div>
    </div>
  );
};

export default ItemAdvertise;
