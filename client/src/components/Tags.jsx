import React from "react";
import TagButton from "./TagButton";

const Tags = () => {
  return (
    <div className="flex bg-transparent items-center justify-start gap-x-6 mt-10">
      <TagButton tag={"Recommended"} tagColor={"#31267D"} />
      <TagButton tag={"Recommended"} tagColor={"#31267D"} />
    </div>
  );
};

export default Tags;
