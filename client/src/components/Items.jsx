import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
};
const Items = ({ data, heading, timeLeft }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1377,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="mt-10 bg-bg_secondary shadow-md min-h-[500px] rounded-xl">
      <div className="flex items-center justify-between mx-5  py-5">
        <div className="flex items-center gap-x-6">
          <div className="text-[16px] xl:text-xl font-medium tracking-tight">
            {heading}
          </div>
          {timeLeft && (
            <div className="flex items-center gap-x-1">
              <div className="text-md font-normal tracking-tight text-black/60">
                Ends in
              </div>
              <div className="p-1 bg-red-400 text-white rounded-md">02</div>
              <div className="text-sm text-black/60 ">:</div>
              <div className="p-1 bg-red-400 text-white rounded-md">54</div>
              <div className="text-sm text-black/60">:</div>
              <div className="p-1 bg-red-400 text-white rounded-md">04</div>
            </div>
          )}
        </div>
        <div className="text-sm xl:text-lg tracking-tight font-medium text-highlight cursor-pointer hover:border-b-2 hover:border-highlight transition">
          See more
        </div>
      </div>
      <Slider
        className="flex mx-5 mt-5 overflow-hidden z-1 px-10 pb-4"
        {...settings}
      >
        {data.map((item, itemIndex) => (
          <Card item={item} key={itemIndex} />
        ))}
      </Slider>
    </div>
  );
};

export default Items;
