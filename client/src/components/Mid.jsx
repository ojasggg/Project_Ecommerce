import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Cart,
  Home,
  IndividualItem,
  Login,
  Profile,
  Register,
  Setting,
} from "../pages";

const Mid = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/item" element={<IndividualItem />} />
    </Routes>
  );
};

export default Mid;
