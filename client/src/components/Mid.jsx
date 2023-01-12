import React from "react";
import { Route, Routes } from "react-router-dom";

import { Cart, Home, IndividualItem } from "../pages";

const Mid = () => {
  return (
    <Routes>
      <Route index element={<Cart />} />
    </Routes>
  );
};

export default Mid;
