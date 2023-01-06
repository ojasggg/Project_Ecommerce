import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CiShoppingCart, CiBellOn } from "react-icons/ci";

import Profile from "../assets/image/profile.jpg";

const Navbar = () => {
  return (
    <div className="bg-primary text-white p-2 ">
      <div className="flex items-center justify-between h-16 py-2 mx-20 xl:mx-60">
        <div className="flex lg:gap-x-6 xl:gap-x-10">
          <div className="flex items-center gap-x-1">
            <HiShoppingBag className="text-[30px] ml-[-5px]" />
            <h1 className="font-light text-[24px]">NepalBuy</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-x-1 items-center text-[10px] text-white/60">
              <IoLocationSharp className="text-[12px]" />
              <p>Deliver to</p>
            </div>
            <p className="text-[14px]">Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="flex items-center h-10 lg:ml-[-60px] xl:ml-[-200px]">
          <div className="flex p-4 gap-x-1 items-center bg-dim h-full rounded-tl-lg rounded-bl-lg text-[12px] xl:text-[14px] text-white/60 cursor-pointer hover:bg-dim/60 transition">
            <p>All Category</p>
            <BsFillCaretDownFill />
          </div>
          <div className="h-full border-y border-secondary">
            <input
              type="text"
              placeholder="Search product here..."
              className="bg-transparent text-[14px] ml-2 placeholder:text-white/60 placeholder:text-[12px] xl:placeholder:text-[14px] text-white h-full lg:min-w-[400px] xl:min-w-[400px]"
            />
          </div>
          <div className="flex bg-highlight h-full items-center justify-center w-[50px] rounded-tr-lg rounded-br-lg cursor-pointer hover:bg-highlight/80 transition">
            <FiSearch className="text-lg xl:text-xl hover:scale-110" />
          </div>
        </div>
        <div className="flex divide-x-2 divide-secondary">
          <div className="flex text-white/80 items-center gap-x-6 mr-4">
            <CiShoppingCart
              size={28}
              className="hover:scale-110 cursor-pointer transition"
            />
            <CiBellOn
              size={28}
              className="hover:scale-110 cursor-pointer transition"
            />
          </div>

          <div className="flex items-center text-white/60 gap-x-6 cursor-pointer">
            <img
              src={Profile}
              alt="profile"
              className="rounded-full w-[34px] ml-5 hover:scale-110 transition"
            />
            <BsFillCaretDownFill size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
