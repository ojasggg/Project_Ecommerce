import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (loginUser.email === undefined || loginUser.password === undefined) {
        toast.error("Cannot leave input fields empty.", {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        return;
      }
      const login = await axios.post("/api/auth/login", loginUser, {
        withCredentials: true,
      });
      localStorage.setItem("auth_customer", JSON.stringify(login.data.others));
      localStorage.setItem("auth_token", JSON.stringify(login.data.token));
      toast.success("Login Successful", {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
    }
  };
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
              <Link to="/register">Register</Link>
            </span>{" "}
            here.{" "}
          </p>
        </div>
        <form className="flex bg-white p-10" onSubmit={handleSubmit}>
          <div className="mr-10">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[12px] mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginUser.email}
                onChange={handleChange}
                placeholder="Please enter your Email"
                className="border border-gray/40 rounded-md p-2 w-[400px] placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="password" className="text-[12px] mb-1">
                Password*
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginUser.password}
                onChange={handleChange}
                placeholder="Please enter your Password"
                className="border border-gray/40 rounded-md p-2 w-[400px] placeholder:text-sm"
              />
            </div>
            <p className="text-right text-[12px] mt-2 text-highlight">
              <Link to="#">Forget Password?</Link>
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
      <ToastContainer />
    </section>
  );
};

export default Login;
