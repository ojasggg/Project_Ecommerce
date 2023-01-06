import React from "react";
import { categoryData } from "../data/category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryItem from "./CategoryItem";

const billData = [
  { type: "Electricity Bill", active: false },
  { type: "Internet Bill", active: true },
  { type: "Flight", active: false },
  { type: "Top Up", active: false },
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} small-arrow`}
      style={{
        ...style,
        display: "block",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
};

const Category = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1377,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="flex relative">
      <div className="bg-bg_secondary w-[50%] mt-[-130px] h-[200px] z-20 shadow-lg  rounded-xl">
        <div className="flex p-4 ml-1 justify-between">
          <p className="text-lg xl:text-xl tracking-tight text-black font-medium">
            Shop by Category
          </p>
          <p className="text-sm xl:text-lg tracking-tight font-medium text-highlight cursor-pointer hover:border-b-2 hover:border-highlight transition">
            See more
          </p>
        </div>

        <Slider
          className="flex justify-center  px-4 py-1 overflow-hidden"
          {...settings}
        >
          {categoryData.map((category, categoryIndex) => (
            <CategoryItem category={category} key={categoryIndex} />
          ))}
        </Slider>
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
        <div className="flex items-center justify-center gap-x-2 mx-5">
          <div className="mt-6 w-[40%]">
            <label
              htmlFor="number"
              className="text-sm xl:text-[16px] font-medium tracking-tighter mb-2"
            >
              Phone Number
            </label>
            <div className="flex rounded-lg">
              <select className="outline-none rounded-l-lg border border-black/10 bg-black/10 p-2 xl:p-3 text-sm xl:text-[16px] xl:font-bold focus:border focus:border-highlight ">
                <option value="Nepal">+977</option>
                <option value="Nepal">+977</option>
                <option value="Nepal">+977</option>
              </select>
              <input
                type="number"
                id="number"
                placeholder="98-XXXXXXXX"
                className="border border-black/10 border-l-0 bg-transparent w-full placeholder:text-sm p-2 xl:p-3 text-sm xl:text-[16px] xl:font-medium rounded-r-lg focus:border focus:border-highlight"
              />
            </div>
          </div>
          <div className="mt-6 w-[40%]">
            <label
              htmlFor="number"
              className="text-sm xl:text-[16px] font-medium tracking-tighter mb-2 ml-2"
            >
              Select Package
            </label>

            <select
              name="package"
              id="package"
              placeholder="98-XXXXXXXX"
              className="bg-transparent outline-none  w-full ml-2 p-2 xl:p-3 border border-black/10 focus:border focus:border-highlight rounded-lg text-sm xl:text-[16px] font-medium cursor-pointer"
            >
              <option defaultValue={""}>Choose a package</option>
              <option value="100GB">100 GB/30 Days</option>
              <option value="100GB_YR">100 GB/1 Year</option>
              <option value="350GB">350 GB/30 Days</option>
              <option value="350GB_YR">350 GB/1 Year</option>
            </select>
          </div>
          <div className="ml-2 mt-11 px-6 py-3 bg-highlight text-white text-12px xl:text-[16px] rounded-lg cursor-pointer hover:bg-[#269e82] transition">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
