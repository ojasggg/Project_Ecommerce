import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";

const Login = () => {
  return (
    <section className="flex flex-col items-center h-fit p-20">
      <div className="w-[70%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">
            Welcome to NepalBuy! Please Login
          </h1>
          <p className="text-[12px] text-gray">
            New Member?{" "}
            <span className="text-highlight">
              <NavLink to="/register">Register</NavLink>
            </span>{" "}
            here.{" "}
          </p>
        </div>
        <form className="flex bg-white p-10">
          <div className="mr-10">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[12px] mb-1">
                Email*
              </label>
              <input
                type="email"
                placeholder="Please enter your Email"
                className="border border-gray/40 rounded-md p-2 w-[400px] placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="text-[12px] mb-1">
                Password*
              </label>
              <input
                type="password"
                placeholder="Please enter your Password"
                className="border border-gray/40 rounded-md p-2 w-[400px] placeholder:text-sm"
              />
            </div>
            <p className="text-right text-[12px] mt-2 text-highlight">
              <NavLink justify-center items-center gap-3 to="#">
                Forget Password?
              </NavLink>
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <button className="w-full p-3 bg-highlight text-white">
              Login
            </button>
            <p className="text-sm text-black/60">Or, Login with</p>
            <button className="flex justify-center items-center gap-3 w-full p-3 bg-blue-500 text-white">
              <ImFacebook />
              Facebook
            </button>
            <button className="flex justify-center items-center gap-3 w-full p-3 bg-red-500 text-white">
              <AiOutlineGoogle />
              Google
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
