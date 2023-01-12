import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Breadcrumbs = ({ paths, current, margin }) => {
  return (
    <div className={`${margin ? `py-${margin}` : "py-6"}`}>
      <ul className="flex items-center gap-x-4">
        {paths.map((path, pathIndex) => (
          <ul key={pathIndex} className="flex items-center gap-x-4">
            <li className="text-[14px] xl:text-[16px] font-medium text-highlight/80">
              <a href="#">{path}</a>
            </li>
            <li>
              <BsChevronRight size={12} />
            </li>
          </ul>
        ))}
        <li className="text-[14px] xl:text-[16px] text-primary font-medium ">
          <a href="#">{current}</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
