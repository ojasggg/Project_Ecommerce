import React from "react";
import { Route, Routes } from "react-router-dom";

import { Cart, Home, IndividualItem, Login, Register } from "../pages";

const Mid = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/item" element={<IndividualItem />} />
    </Routes>
  );
};

export default Mid;
