import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { slides } from "../data/imageUrls";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () =>
        setCurrentIndex((prevState) =>
          prevState === slides.length - 1 ? 0 : prevState + 1
        ),
      5000
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="min-w-screen w-full relative h-[350px] xl:h-[500px] group">
      <div
        className="min-w-full h-full bg-cover duration-500 object-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right,${[
            slides[currentIndex].gradientColor,
          ]}, transparent 70%),url(${slides[currentIndex].url})`,
        }}
      ></div>
      <div className="absolute left-40 top-[12%] z-10">
        {slides[currentIndex].duration && (
          <div className="duration-200">
            <div
              className={`text-[24px] font-medium ${
                currentIndex == 2 || currentIndex === 4 || currentIndex === 0
                  ? "text-white"
                  : "text-primary"
              }
              `}
            >
              {slides[currentIndex].duration}
            </div>
          </div>
        )}
        {slides[currentIndex].heading && (
          <div className="duration-300">
            <div
              className={`text-[64px] ml-[-5px] font-bold mt-[-15px] ${
                currentIndex == 2 || currentIndex === 4 || currentIndex === 0
                  ? "text-white"
                  : "text-primary"
              }`}
            >
              {slides[currentIndex].heading}
            </div>
          </div>
        )}
        {slides[currentIndex].description && (
          <div className="duration-300 ">
            <div
              className={`text-[18px] font-medium max-w-xl ${
                currentIndex === 2 || currentIndex === 4 || currentIndex === 0
                  ? "text-white"
                  : "text-primary"
              }`}
            >
              {slides[currentIndex].description}
            </div>
          </div>
        )}
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Carousel;
