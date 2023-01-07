import React from "react";

import { BiPlus, BiMinus } from "react-icons/bi";
import { BsBag, BsFillChatSquareDotsFill, BsShareFill } from "react-icons/bs";

const ItemPayout = () => {
  return (
    <div className="bg-bg_secondary mt-6 rounded-xl pt-4 p-6">
      <h5 className="text-[16px] font-medium">Set Order</h5>
      <hr className="text-black/10 mb-6 mt-4" />
      <div className="flex gap-3 items-center">
        <img
          src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=350&q=80"
          alt="Image"
          className="w-[60px] h-[60px] rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <p className="text-[14px] text-black/40">Selected Size</p>
          <h6 className="font-bold text-[16px]">XL (Extra Large)</h6>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-6 items-center p-2 border border-black/5 rounded-lg w-[130px]">
          <button className="p-2 bg-gray/10 rounded-full ">
            <BiMinus />
          </button>
          <p className="text-[16px]">1</p>
          <button className="p-2 bg-white rounded-full ">
            <BiPlus />
          </button>
        </div>
        <p className="text-sm text-black/40">
          Stock: <strong className="text-black ml-2">856</strong>
        </p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-black/40">Total Price:</p>
        <h3 className="text-xl font-bold">$45.00</h3>
      </div>
      <div className="flex flex-col mt-4 gap-2">
        <button className="w-full bg-highlight rounded-xl py-4 text-white text-sm">
          Buy Now
        </button>
        <button className="flex gap-2 items-center h-[52px] justify-center w-full bg-transparent border border-highlight p-4 text-sm text-highlight rounded-xl">
          <BsBag size={20} />
          <p>Add to Bag</p>
        </button>
      </div>
      <div className="flex mt-10 justify-between">
        <button className="flex items-center text-sm text-highlight font-medium gap-2">
          <BsFillChatSquareDotsFill />
          <p>Chat Seller</p>
        </button>
        <button className="flex items-center text-sm text-highlight font-medium gap-2">
          <BsShareFill />
          <p>Share Product</p>
        </button>
      </div>
    </div>
  );
};

export default ItemPayout;
