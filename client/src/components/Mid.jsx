import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";

const Mid = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default Mid;
