import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col bg-white xl:ml-3 min-h-[350px] max-w-[250px] rounded-md cursor-pointer">
      <div className="max-h-[250px] w-[250px] overflow-hidden rounded-t-md">
        <img
          src={item.itemImageUrl}
          alt="image"
          className="rounded-t-md hover:scale-110 transition"
        />
      </div>
      <div className="mx-3 mt-1">
        <p className="text-[12px] font-medium text-black/40 mt-1">
          {item.itemType}
        </p>
        <p className="text-[16px] font-bold text-black">{item.itemName}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-[18px] text-highlight">
            Rs.{item.itemPrice}
          </p>
          <div className="flex items-center gap-x-1">
            <AiFillStar size={18} className="text-yellow-500" />
            <p className="text-[14px] text-black/40">
              {item.avgRating} <span className="font-medium">|</span>{" "}
              {item.ratingCount}
            </p>
          </div>
        </div>
        {(item.leftStock || item.totalStock) && (
          <div className="flex items-center gap-x-2 mt-1 mb-3">
            <div className="bg-[#E76382] w-full h-[10px] rounded-full"></div>
            <p className="font-bold flex">
              {item.leftStock}
              <span className="font-normal text-black/30">
                /{item.totalStock}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
