import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    phoneNumber: undefined,
    email: undefined,
    confirmPassword: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        registerUser.firstName === undefined ||
        registerUser.lastName === undefined ||
        registerUser.phoneNumber === undefined ||
        registerUser.username === undefined ||
        registerUser.email === undefined ||
        registerUser.password === undefined ||
        registerUser.confirmPassword === undefined
      ) {
        toast.error("Cannot leave input fields empty.", {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        return;
      } else if (registerUser.password !== registerUser.confirmPassword) {
        toast.error("Password Doesn't match", {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        return;
      } else {
        const { confirmPassword, ...other } = registerUser;
        const registeredUser = await axios.post("/api/auth/register", other);
        toast.success(registeredUser.data.message, {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        setTimeout(() => navigate("/login"), 3000);
      }
    } catch (error) {
      const errorMsg = error.response.data.message;
      const errorArr = errorMsg.split(",");
      for (let errors of errorArr) {
        toast.error(errors, {
          position: "bottom-right",
          pauseOnHover: false,
        });
      }
    }
  };

  return (
    <section className="flex flex-col items-center h-fit p-20">
      <div className="w-[70%]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Create Your NepalBuy Account</h1>
          <p className="text-[12px] text-gray">
            Already Member?{" "}
            <span className="text-highlight">
              <Link to="/login">Login</Link>
            </span>{" "}
            here.{" "}
          </p>
        </div>
        <form className="bg-white p-10 min-w-full" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="firstName" className="text-[12px] mb-1">
                First Name*
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Please enter your Firstname"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
                value={registerUser.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1  flex flex-col">
              <label htmlFor="lastName" className="text-[12px] mb-1">
                LastName*
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Please enter your Lastname"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
                value={registerUser.lastName}
                onChange={handleChange}
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
                name="username"
                placeholder="Please enter your Username"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
                value={registerUser.username}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1  flex flex-col">
              <label htmlFor="phoneNumber" className="text-[12px] mb-1">
                Phone Number*
              </label>
              <input
                id="phoneNumber"
                type="number"
                name="phoneNumber"
                placeholder="Please enter your Number"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
                value={registerUser.phoneNumber}
                onChange={handleChange}
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
              name="email"
              placeholder="Please enter your Email Address"
              className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
              value={registerUser.email}
              onChange={handleChange}
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
                name="confirmPassword"
                placeholder="Please enter your Confirm password"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm"
                value={registerUser.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label htmlFor="password" className="text-[12px] mb-1">
                Password*
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Please enter your Password"
                className="border border-gray/40 rounded-md p-2 placeholder:text-sm "
                value={registerUser.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col w-full gap-2 max-w-[50%] items-center">
              <button
                className="w-full p-3 bg-highlight text-white"
                type="submit"
              >
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
      <ToastContainer />
    </section>
  );
};

export default Register;
