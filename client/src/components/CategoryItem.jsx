import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 p-2 rounded-lg ml-3 bg-white hover:scale-105 transition cursor-pointer">
      <img src={category.cImage} className="w-16" alt="" />
      <p className="text-md text-center">{category.cName}</p>
    </div>
  );
};

export default CategoryItem;
