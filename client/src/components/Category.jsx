import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { categoryData } from "../data/category";

const billData = [
  { type: "Electricity Bill", active: false },
  { type: "Internet Bill", active: true },
  { type: "Flight", active: false },
  { type: "Top Up", active: false },
];

const Category = () => {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();

  useEffect(() => {
    setWidth(
      sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth
    );
  }, []);

  return (
    <div className="flex relative mx-20">
      <div className="bg-bg_secondary w-[50%] mt-[-130px] h-[200px] z-20 shadow-lg  rounded-xl">
        <div className="flex p-4 ml-1 justify-between">
          <p className="text-lg tracking-tight text-black font-medium">
            Shop by Category
          </p>
          <p className="text-sm tracking-tight font-medium text-highlight cursor-pointer hover:border-b-2 hover:border-highlight transition">
            See more
          </p>
        </div>

        <motion.div
          className="overflow-hidden"
          ref={sliderWrapper}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex items-center my-2 ml-4"
          >
            {categoryData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="flex flex-col items-center justify-center h-[100px] min-w-[100px] rounded-xl shadow-md ml-3 hover:scale-110 cursor-pointer transition"
              >
                <img src={category.cImage} className="w-16" alt="" />
                <p className="text-md">{category.cName}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="ml-3 bg-bg_secondary w-[50%] mt-[-130px] h-[200px] z-20 shadow-lg rounded-xl">
        <div className="flex mx-2 justify-between items-center text-black/20 text-lg tracking-tight border-b border-black/20 font-primary text-[16px]">
          {billData.map((bill, billIndex) => (
            <div
              key={billIndex}
              className={`p-4 pb-2 cursor-pointer ${
                bill.active
                  ? "border-b-2 border-highlight text-highlight"
                  : "hover:border-b hover:border-highlight/60 hover:text-highlight/60"
              } transition`}
            >
              {bill.type}
            </div>
          ))}
        </div>
        <div className="flex items-center mx-5">
          <div className="flex flex-col mt-6 w-[40%]">
            <label
              htmlFor="number"
              className="text-sm font-medium tracking-tighter mb-2"
            >
              Phone Number
            </label>
            <div className="flex rounded-lg">
              <select className="outline-none rounded-l-lg border border-black/10 bg-black/10 p-2 text-sm focus:border focus:border-highlight ">
                <option value="Nepal">+977</option>
                <option value="Nepal">+977</option>
                <option value="Nepal">+977</option>
              </select>
              <input
                type="number"
                id="number"
                placeholder="98-XXXXXXXX"
                className="border border-black/10 border-l-0 bg-transparent w-full placeholder:text-sm p-2 text-sm rounded-r-lg focus:border focus:border-highlight"
              />
            </div>
          </div>
          <div className="flex flex-col mt-6 w-[40%]">
            <label
              htmlFor="number"
              className="text-sm font-medium tracking-tighter mb-2 ml-2"
            >
              Phone Number
            </label>

            <select
              name="package"
              id="package"
              placeholder="98-XXXXXXXX"
              className="bg-transparent outline-none  w-full ml-2 p-2 border border-black/10 focus:border focus:border-highlight rounded-lg text-sm font-medium cursor-pointer"
            >
              <option selected>Choose a package</option>
              <option value="100GB">100 GB/30 Days</option>
              <option value="100GB_YR">100 GB/1 Year</option>
              <option value="350GB">350 GB/30 Days</option>
              <option value="350GB_YR">350 GB/1 Year</option>
            </select>
          </div>
          <div className="text-sm px-4 py-[10px] text-white ml-4 mt-12  bg-highlight rounded-lg hover:bg-highlight/90 transition cursor-pointer">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
