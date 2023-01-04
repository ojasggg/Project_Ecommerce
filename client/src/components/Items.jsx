import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import { AiFillStar } from "react-icons/ai";

const itemsData = [
  {
    itemType: "Sneakers",
    itemName: "Converse",
    itemPrice: 3500,
    avgRating: 4.5,
    ratingCount: 467,
    totalStock: "30",
    leftStock: "17",
    itemImageUrl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
  },
  {
    itemType: "Dress",
    itemName: "Green One Piece Dress",
    itemPrice: 5500,
    avgRating: 5,
    ratingCount: 67,
    totalStock: "130",
    leftStock: "104",
    itemImageUrl:
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
  },
  {
    itemType: "Bag",
    itemName: "Orange Leather Bag",
    itemPrice: 9999,
    avgRating: 4,
    ratingCount: 24,
    totalStock: "10",
    leftStock: "6",
    itemImageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
  },
  {
    itemType: "Watch",
    itemName: "Brown Watch",
    itemPrice: 25000,
    avgRating: 5,
    ratingCount: 5,
    totalStock: "3",
    leftStock: "3",
    itemImageUrl:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
  },
  {
    itemType: "Hat",
    itemName: "Winter Binis",
    itemPrice: 500,
    avgRating: 3,
    ratingCount: 604,
    totalStock: "250",
    leftStock: "165",
    itemImageUrl:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80",
  },
];

const Items = () => {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();

  useEffect(() => {
    setWidth(
      sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth
    );
  }, []);
  return (
    <div className="mx-20 mt-10 bg-bg_secondary shadow-md min-h-[500px] rounded-xl">
      <div className="flex items-center justify-between mx-5 py-4">
        <div className="flex items-center gap-x-6">
          <div className="text-[16px] font-medium tracking-tight">
            Special Product for you
          </div>
          <div className="flex items-center gap-x-1">
            <div className="text-md font-normal tracking-tight text-black/60">
              Ends in
            </div>
            <div className="p-1 bg-red-400 text-white rounded-md">02</div>
            <div className="text-sm text-black/60 ">:</div>
            <div className="p-1 bg-red-400 text-white rounded-md">54</div>
            <div className="text-sm text-black/60">:</div>
            <div className="p-1 bg-red-400 text-white rounded-md">04</div>
          </div>
        </div>
        <div className="text-sm tracking-tight font-medium text-highlight cursor-pointer hover:border-b-2 hover:border-highlight transition">
          See more
        </div>
      </div>

      <motion.div
        className="overflow-hidden"
        ref={sliderWrapper}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-x-6 mx-5 mt-5"
        >
          {itemsData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-white max-h-[370px] w-[250px] rounded-md shadow-xl cursor-pointer"
            >
              <div className="max-h-[250px] w-[250px] overflow-hidden rounded-t-md">
                <img
                  src={item.itemImageUrl}
                  alt="image"
                  className="rounded-t-md hover:scale-110 transition"
                />
              </div>
              <div className="mx-3">
                <p className="text-[12px] font-medium text-black/40 mt-1">
                  {item.itemType}
                </p>
                <p className="text-[16px] font-bold text-black">
                  {item.itemName}
                </p>
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
                <div className="flex items-center gap-x-2 mt-1 mb-3">
                  <div className="bg-[#E76382] w-full h-[10px] rounded-full"></div>
                  <p className="font-bold flex">
                    {item.leftStock}
                    <span className="font-normal text-black/30">
                      /{item.totalStock}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Items;
