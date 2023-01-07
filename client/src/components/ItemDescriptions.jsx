import React from "react";

import { GiPlainCircle } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsShop } from "react-icons/bs";

const ItemDescriptions = () => {
  return (
    <>
      <div>
        <a href="#" className="font-medium text-sm text-highlight">
          Visit Thirfting_Store
        </a>
        <h1 className="font-bold text-3xl mt-2 tracking-wide leading-[35px]">
          Essentials Men's Regular-Fit Long-Sleeve Oxford Shirt
        </h1>
      </div>
      <ul className="flex mt-2 items-center gap-x-2 text-black/40 text-sm font-medium">
        <li className="flex gap-x-1 items-center">
          <AiFillStar className="text-[#F9A23B] text-lg" />
          <p>4.9 Ratings</p>
        </li>
        <li>
          <GiPlainCircle size={7} />
        </li>
        <li>2.3k+ Reviews</li>
        <li>
          <GiPlainCircle size={7} />
        </li>
        <li>2.9k+ Sold</li>
      </ul>
      <div className="mt-6">
        <h6 className="text-[16px] font-medium ">Choose size:</h6>
        <div className="flex gap-x-2 mt-2">
          <button className="individual_item_btn">S</button>
          <button className="individual_item_btn">M</button>
          <button className="individual_item_btn">LG</button>
          <button className="individual_item_btn">XL</button>
        </div>
      </div>
      <div className="mt-6">
        <ul className="flex justify-start items-center gap-x-12 mx-2 border-b border-black/20 text-[16px] font-medium text-black/40">
          <li className="text-center hover:text-highlight p-3 ">
            <a href="#">About Items</a>
          </li>
          <li className="text-center hover:text-highlight p-3 ">
            <a href="#">Reviews</a>
          </li>
        </ul>

        <div className="flex justify-start gap-x-36 mt-6">
          <ul className="flex flex-col justify-start gap-y-2 text-[14px]">
            <li>
              <span className="text-black/40">Brand: </span>
              <strong>ChAmkpR</strong>
            </li>
            <li>
              <span className="text-black/40">Category: </span>
              <strong>Casual Shirt</strong>
            </li>
            <li>
              <span className="text-black/40">Condition: </span>
              <strong>New</strong>
            </li>
          </ul>

          <ul className="flex flex-col justify-start gap-y-2 text-[14px]">
            <li>
              <span className="text-black/40">Color: </span>
              <strong>Aprikot</strong>
            </li>
            <li>
              <span className="text-black/40">Material: </span>
              <strong>Polyester</strong>
            </li>
            <li>
              <span className="text-black/40">Heavy: </span>
              <strong>200 g</strong>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h6 className="text-[16px] font-medium">Description:</h6>
          <ul className="mt-2 list-disc ml-8 text-[14px] text-black/60 font-medium leading-6">
            <li>
              Long-sleeve dress shirt in classic fit featuring button-down
              collar
            </li>
            <li>Patch Pocket on Left Chest</li>
            <li>Durable Combination Cotton Fabric</li>
            <li>COmfortable and quality dress shirt</li>
            <li>Go To Classic button down shirt for all special occasions</li>
          </ul>
          <p className="text-[14px] text-black/60 mt-6 font-medium">
            Chat us if there is anything you need to ask about the product.
          </p>
          <button className="mt-6 text-highlight font-medium">See less</button>
        </div>
        <div className="mt-8">
          <h6 className="text-[16px] font-medium">Shippings Information:</h6>
          <ul className="leading-8 text-[14px] mt-2">
            <li>
              <span className="text-black/60">Delivery: </span>
              <strong>Shipping from Kathmandu, Nepal</strong>
            </li>
            <li>
              <span className="text-black/60">Shipping: </span>
              <strong>FREE International Shipping</strong>
            </li>
            <li>
              <span className="text-black/60">Arrival: </span>
              <strong>Estimated arrival on 25-27 OCT 2022</strong>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h6 className="text-[16px] font-medium">Seller Information:</h6>
          <div className="mt-2">
            <div className="flex items-center gap-x-4">
              <div className="flex items-center justify-center h-20 w-20 bg-gray/30 rounded-full ">
                <p className="text-sm font-bold w-14 inline-block">
                  Thrifting Store.
                </p>
              </div>

              <div className="flex flex-col gap-y-1">
                <h4 className="text-xl font-bold">Thrifting_Store</h4>
                <p className="text-sm text-black/60">
                  Active 5 Minutes ago | 96/7% positive Feedback
                </p>
              </div>
            </div>
            <button className="flex gap-2 items-center px-6 py-3 bg-transparent border border-highlight rounded-xl text-highlight ml-24 mb-2 mt-2 xl:mt-1 hover:bg-highlight hover:text-white transition">
              <BsShop size={18} />
              <span className="text-sm">Visit store</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDescriptions;
