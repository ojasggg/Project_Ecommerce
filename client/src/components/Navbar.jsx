import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CiShoppingCart, CiBellOn } from "react-icons/ci";

import Profile from "../assets/image/profile.jpg";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Navbar = ({ isAuthenticated }) => {
  const [profileDropDown, setProfileDropDown] = useState(false);

  const handleLogout = () => {
    toast.success("Logout Successful", {
      position: "bottom-right",
      autoClose: 3000,
      pauseOnHover: false,
    });
    localStorage.removeItem("auth_token");
    setTimeout(
      () => window.location.replace("http://127.0.0.1:5173/login"),
      3000
    );
  };
  return (
    <div className="bg-primary text-white p-2 ">
      <div className="flex items-center justify-between h-16 py-2 mx-20 xl:mx-60">
        <div className="flex lg:gap-x-6 xl:gap-x-10">
          <Link to="/">
            <div className="flex items-center gap-x-1">
              <HiShoppingBag className="text-[30px] ml-[-5px]" />
              <h1 className="font-light text-[24px]">NepalBuy</h1>
            </div>
          </Link>
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
        {isAuthenticated ? (
          <div className="flex divide-x-2 divide-white/20">
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

            <div className="relative">
              <div
                className="flex items-center text-white/60 gap-x-6 cursor-pointer"
                data-dropdown-toggle="dropdownInformation"
              >
                <Link to="/profile">
                  <img
                    src={Profile}
                    alt="profile"
                    className="rounded-full w-[34px] ml-5 hover:scale-110 transition"
                  />
                </Link>
                <div onClick={() => setProfileDropDown((prev) => !prev)}>
                  <BsFillCaretDownFill size={15} />
                </div>
              </div>
              <div
                id="dropdownInformation"
                class={`${
                  profileDropDown ? "" : "hidden"
                } absolute flex flex-col z-[9999] bg-secondary rounded-lg top-12 left-[-5px] h-fit w-[160px]`}
              >
                <div className="flex flex-col items-center p-3">
                  <h3 className="text-sm font-bold">Ojash Gurung</h3>
                  <p className="text-[12px] text-white/60">Verified Customer</p>
                </div>
                <div className="mx-2 bg-white/20 h-[1px]"></div>
                <ul className="flex flex-col items-center text-sm">
                  <li className="dropdown_item">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="dropdown_item">
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li className="dropdown_item">
                    <Link to="/liked">Liked</Link>
                  </li>
                  <li className="dropdown_item">
                    <Link to="/setting">Setting</Link>
                  </li>
                </ul>
                <div className="mx-2 bg-white/20 h-[1px]"></div>
                <button
                  className="flex flex-col items-center p-3 hover:bg-white/10 text-white/80 hover:text-white transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-sm">
            <p className="hover:border-b hover:border-white/60 transition ease-in">
              <Link to="/login">Login</Link>
            </p>
            <span className="text-white/60">|</span>
            <p className="hover:border-b hover:border-white/60 transition-all ease-in">
              <Link to="/register">Register</Link>
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
