import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";
import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <div className="w-full bg-primary text-white">
      <div className="flex justify-between mx-20 xl:mx-60 pt-14 pb-14">
        <FooterItem
          heading={"About us"}
          elements={["Blog", "B2B Digital", "Bridestory", "Mitra Blog"]}
        />
        <FooterItem
          heading={"Buy & Sell"}
          elements={[
            "Bill & Top up",
            "COD",
            "Seller Education",
            "Official store list",
          ]}
        />
        <FooterItem
          heading={"Our Policies"}
          elements={["Privacy Policy", "Term of Use", "Term of ORder"]}
        />

        <div className="flex flex-col gap-x-6">
          <div className="flex items-center gap-x-1">
            <HiShoppingBag className="text-[30px] ml-[-5px]" />
            <h1 className="text-2xl font-medium">NepalBuy</h1>
          </div>
          <p className="w-[350px] text-white/40 mt-4 text-md">
            Curious about new developments and updates? follow our social media
          </p>
          <div className="flex items-center gap-x-6 text-white/40 mt-6">
            <AiFillInstagram
              size={26}
              className="cursor-pointer hover:text-white/60 transition"
            />
            <AiFillFacebook
              size={26}
              className="cursor-pointer hover:text-white/60 transition"
            />
            <AiFillTwitterCircle
              size={26}
              className="cursor-pointer hover:text-white/60 transition"
            />
            <AiFillGoogleCircle
              size={26}
              className="cursor-pointer hover:text-white/60 transition"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-sm p-3 text-white/70">
        © 2023 NepalBuy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
