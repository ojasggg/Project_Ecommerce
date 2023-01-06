import React from "react";

const TagButton = ({ tag, tagColor }) => {
  return (
    <>
      <div
        className={`p-6 bg-[${tagColor}] text-white text-sm inline-block rounded-xl`}
      >
        {tag}
      </div>
    </>
  );
};

export default TagButton;
