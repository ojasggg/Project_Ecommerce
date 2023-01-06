import React from "react";
import { tshirtData } from "../data/bestTshirt.js";
import Card from "./Card.jsx";

const EntireItems = () => {
  return (
    <div className="flex flex-col gap-y-16 items-center justify-center bg-transparent mt-10 mb-20">
      <div className="grid grid-cols-4 gap-x-4 gap-y-6 xl:grid xl:grid-cols-5 ">
        {tshirtData.map((item, itemIndex) => (
          <Card key={itemIndex} item={item} />
        ))}
      </div>
      <button className="xl:p-4 p-3 rounded-xl font-medium bg-transparent text-highlight border border-highlight hover:scale-105 transition">
        Load more
      </button>
    </div>
  );
};

export default EntireItems;
