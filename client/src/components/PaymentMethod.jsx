import React from "react";

import { BsCreditCard2Front } from "react-icons/bs";

const PaymentMethod = ({ total }) => {
  return (
    <div className="mt-6">
      <div className="bg-gray/20 rounded-lg ">
        <h4 className="p-3 text-black uppercase ml-2 text-[14px] font-medium">
          Payment Method
        </h4>
      </div>
      <div className="flex items-start p-4">
        <input type="checkbox" className="m-2 my-3 w-4 h-4" />
        <div>
          <div className="flex items-center gap-2 ml-2">
            <div className="p-3 border border-gray/20 rounded-lg text-xl">
              <BsCreditCard2Front />
            </div>
            <h2 className="text-[16px] font-medium">Debit/Credit Card</h2>
          </div>
          <div className="ml-5 mt-2">
            <div className="flex flex-col">
              <label
                htmlFor="card_number"
                className="text-[12px] font-medium mb-1"
              >
                Enter Card Number*
              </label>
              <input
                type="number"
                placeholder="Enter Card Number"
                id="card_number"
                className="p-3 bg-transparent border border-gray/60 rounded-lg placeholder:text-sm focus:border-highlight w-[74%]"
              />
            </div>
            <div className="mt-2">
              <div className="flex gap-2">
                <div className="flex flex-col flex-none">
                  <label
                    htmlFor="card_number"
                    className="text-[12px] font-medium mb-1"
                  >
                    Valid Date
                  </label>
                  <div className="max-w-[200px]">
                    <input
                      type="number"
                      placeholder="MM"
                      id="card_number"
                      className="p-3 bg-transparent border border-gray/60 rounded-l-lg placeholder:text-sm focus:border-highlight w-[50%]"
                    />
                    <input
                      type="number"
                      placeholder="YYYY"
                      id="card_number"
                      className="p-3 bg-transparent border border-gray/60 rounded-r-lg placeholder:text-sm focus:border-highlight border-l-0 w-[50%]"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="card_number"
                    className="text-[12px] font-medium mb-1"
                  >
                    CVV*
                  </label>
                  <div className="flex gap-2 items-center ">
                    <input
                      type="number"
                      placeholder="CVV number"
                      id="card_number"
                      className="p-3 bg-transparent border border-gray/60 rounded-lg placeholder:text-sm focus:border-highlight w-[200px]"
                    />
                    <button className="bg-highlight w-[150px] h-[50px] text-white text-sm rounded-lg">
                      Pay Rs.{total ? total : "5000.00"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-black ml-16 my-4 font-medium">
        Your card details would be saved for faster payments. Your CVV will not
        be stored.
      </p>
      <div className="flex items-center p-4">
        <input type="checkbox" className="mx-2 w-4 h-4" />
        <div className="flex items-center gap-2 ml-2">
          <div className="p-3 border border-gray/20 rounded-lg text-xl">
            <BsCreditCard2Front />
          </div>
          <h2 className="text-[16px] font-medium">Net Banking</h2>
        </div>
      </div>
      <div className="flex items-center p-4">
        <input type="checkbox" className="mx-2 w-4 h-4" />
        <div className="flex items-center gap-2 ml-2">
          <div className="p-3 border border-gray/20 rounded-lg text-xl">
            <BsCreditCard2Front />
          </div>
          <h2 className="text-[16px] font-medium">Esewa Wallet</h2>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
