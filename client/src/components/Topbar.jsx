import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const topbarData = ["Promo", "NepalBuy News", "Help & Center", "Language"];

const Topbar = () => {
  return (
    <div className="max-sm:hidden bg-secondary text-white/60 font-light ">
      <div className="flex justify-between mx-20 py-3">
        <div className="flex gap-x-2 items-center cursor-pointer hover:text-white/80 transition">
          {/* Icon */}
          <IoLogoGooglePlaystore className="text-[14px]" />
          <p className="text-[12px]">Download NepalBuy mobile app now</p>
        </div>
        <div className="flex gap-x-6 text-[12px] text-white/80">
          {topbarData.map((data, index) => (
            <p
              key={index}
              className="cursor-pointer hover:underline transition ease-in"
            >
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
