import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, IndividualItem } from "../pages";

const Mid = () => {
  return (
    <Routes>
      <Route index element={<IndividualItem />} />
    </Routes>
  );
};

export default Mid;
