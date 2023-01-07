import React from "react";
import {
  Breadcrumbs,
  ItemAdvertise,
  ItemDescriptions,
  ItemImages,
  ItemPayout,
  ItemReviews,
} from "../components";
import { RiFlag2Fill } from "react-icons/ri";

const IndividualItem = () => {
  return (
    <div className="mx-20 xl:mx-60">
      <div>
        <Breadcrumbs />
      </div>
      <div className="flex mt-4">
        <div className="max-w-[400px]">
          <ItemImages />
        </div>
        <div className="flex-1 px-8">
          <ItemDescriptions />
        </div>
        <div className="min-w-[260px] flex-none">
          <ItemAdvertise />
          <ItemPayout />
          <div className="flex gap-2 items-center mt-6 justify-center">
            <p className="text-sm text-black/40">
              Any problem with the product?
            </p>
            <button className="flex text-highlight items-center gap-1">
              <RiFlag2Fill size={18} />
              <p className="flex items-center text-sm text-highlight font-medium gap-2">
                Report
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <ItemReviews />
      </div>
    </div>
  );
};

export default IndividualItem;
