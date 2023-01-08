import React from "react";

const FooterItem = ({ heading, elements }) => {
  return (
    <div className="flex flex-col items-left justify-start">
      <h1 className="m-0 text-xl font-medium uppercase">{heading}</h1>
      <ul className="flex flex-col gap-y-3 mt-6 text-md text-white/40 font-primary">
        {elements.map((element, elementIndex) => (
          <li key={elementIndex}>
            <a href="#">{element}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
