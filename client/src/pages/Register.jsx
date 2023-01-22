import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <section className="flex flex-col items-center h-fit p-20">
      <div className="w-[70%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Create Your NepalBuy Account</h1>
          <p className="text-[12px] text-gray">
            Already Member?{" "}
            <span className="text-highlight">
              <NavLink to="/login">Login</NavLink>
            </span>{" "}
            here.{" "}
          </p>
        </div>
        <form className="bg-white p-10 min-w-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="firstname" className="text-[12px] mb-1">
                First Name*
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="Please enter your Firstname"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex-1  flex flex-col">
              <label htmlFor="lastname" className="text-[12px] mb-1">
                LastName*
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Please enter your Lastname"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="username" className="text-[12px] mb-1">
                Username*
              </label>
              <input
                id="username"
                type="text"
                placeholder="Please enter your Username"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex-1  flex flex-col">
              <label htmlFor="phonenumber" className="text-[12px] mb-1">
                Phone Number*
              </label>
              <input
                id="phonenumber"
                type="number"
                placeholder="Please enter your Number"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
              />
            </div>
          </div>
          <div className="flex-1  flex flex-col mb-4">
            <label htmlFor="email" className="text-[12px] mb-1">
              Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Please enter your Email Address"
              className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
            />
          </div>
          <div className="flex items-center gap-2 mb-8">
            <div className="flex-1 flex flex-col">
              <label htmlFor="confirm-password" className="text-[12px] mb-1">
                Confirm Password*
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Please enter your Confirm password"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="password" className="text-[12px] mb-1">
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Please enter your Password"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm "
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-full gap-2 max-w-[50%] items-center">
              <button className="w-full p-3 bg-highlight text-white">
                Register
              </button>
              <p className="text-[12px] font-medium text-center text-black/60 mb-4">
                By clicking “SIGN UP”, I agree to Daraz's Terms of Use and
                Privacy Policy
              </p>
              <p className="text-sm text-black/60">Or, Signup with</p>
              <div className="flex gap-2 w-full">
                <button className="flex justify-center items-center gap-3 w-full p-3 bg-blue-500 text-white">
                  <ImFacebook />
                  Facebook
                </button>
                <button className="flex justify-center items-center gap-3 w-full p-3 bg-red-500 text-white">
                  <AiOutlineGoogle />
                  Google
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
