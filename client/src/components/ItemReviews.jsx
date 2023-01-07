import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const ItemReviews = () => {
  return (
    <div className="flex justify-evenly my-16">
      <div>
        <h5 className="text-[16px] font-medium">Reviews & Ratings</h5>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col items-center justify-center p-4">
            <p className="text-black/40 text-sm">
              <span className="text-4xl text-black font-bold mr-1">4.9</span>
              /50
            </p>
            <div className="flex gap-2 mt-4 text-[#F9A23B]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-black/40 text-sm m-2">2.5k+ Reviews</p>
          </div>
          <div className="flex flex-col gap-1 justify-start">
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <AiFillStar className="text-[#F9A23B]" />
                <p className="text-sm text-black/40">5</p>
              </div>
              <div className="relative w-[150px] h-[10px] bg-gray/40 rounded-full">
                <div className="absolute w-[90%] bg-highlight z-1 h-[10px] rounded-full"></div>
              </div>
              <p className="font-medium text-sm">1.5k</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <AiFillStar className="text-[#F9A23B]" />
                <p className="text-sm text-black/40">4</p>
              </div>
              <div className="relative w-[150px] h-[10px] bg-gray/40 rounded-full">
                <div className="absolute w-[60%] bg-highlight z-1 h-[10px] rounded-full"></div>
              </div>
              <p className="font-medium text-sm">0.5k</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <AiFillStar className="text-[#F9A23B]" />
                <p className="text-sm text-black/40">3</p>
              </div>
              <div className="relative  w-[150px] h-[10px] bg-gray/40 rounded-full">
                <div className="absolute w-[40%] bg-highlight z-1 h-[10px] rounded-full"></div>
              </div>
              <p className="font-medium text-sm ">100</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center ">
                <AiFillStar className="text-[#F9A23B]" />
                <p className="text-sm text-black/40">2</p>
              </div>
              <div className="relative w-[150px] h-[10px] bg-gray/40 rounded-full">
                <div className="absolute w-[20%] bg-highlight z-1 h-[10px] rounded-full"></div>
              </div>
              <p className="font-medium text-sm">20</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center ">
                <AiFillStar className="text-[#F9A23B]" />
                <p className="text-sm text-black/40">1</p>
              </div>
              <div className="relative w-[150px] h-[10px] bg-gray/40 rounded-full">
                <div className="absolute w-[20%] bg-highlight z-1 h-[10px] rounded-full"></div>
              </div>
              <p className="font-medium text-sm">20</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-[16px] font-medium">Review with images & videos</h5>
        <div className="flex gap-2 items-center mt-4">
          <div className="object-cover rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=350&q=80"
              alt="Image 1"
              className="rounded-xl w-[120px]  h-[120px]"
            />
          </div>
          <div className="object-cover rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80"
              alt="Image 1"
              className="rounded-xl w-[120px]  h-[120px]"
            />
          </div>
          <div className="object-cover rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1624124959947-5fa0f8886507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80"
              alt="Image 1"
              className="rounded-xl w-[120px]  h-[120px]"
            />
          </div>
          <div className="relative object-cover rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80"
              alt="Image 1"
              className=" rounded-xl w-[120px] h-[120px] blur-[2px] grayscale"
            />
            <p className="absolute font-bold text-2xl z-1 text-black top-[45px] left-[40px]">
              +5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemReviews;
