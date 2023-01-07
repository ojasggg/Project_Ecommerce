import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Breadcrumbs = () => {
  return (
    <div className="py-6">
      <ul className="flex items-center gap-x-4">
        <li className="text-[14px] xl:text-[16px] font-medium text-highlight/80">
          <a href="#">Home</a>
        </li>
        <li>
          <BsChevronRight size={12} />
        </li>
        <li className="text-[14px] xl:text-[16px] font-medium text-highlight/80">
          <a href="#">Men's Fashion</a>
        </li>
        <li>
          <BsChevronRight size={12} />
        </li>
        <li className="text-[14px] xl:text-[16px] font-medium text-highlight/80">
          <a href="#">Men's Top</a>
        </li>
        <li>
          <BsChevronRight size={12} />
        </li>
        <li className="text-[14px] xl:text-[16px] font-medium text-highlight/80">
          <a href="#">Casual Shirt</a>
        </li>
        <li>
          <BsChevronRight size={12} />
        </li>
        <li className="text-[14px] xl:text-[16px] text-primary font-bold ">
          <a href="#">White T-shirt</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
