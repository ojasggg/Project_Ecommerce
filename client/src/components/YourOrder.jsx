import React from "react";

const YourOrder = () => {
  return (
    <div className="min-w-[350px]  bg-bg_secondary rounded-xl ml-4">
      <div className="flex flex-col max-h-[600px] p-4">
        <div className="">
          <h5 className="text-[16px] font-medium">Your Order</h5>
          <hr className="text-gray/20 mt-4" />
        </div>
        <div className="min-h-[380px] py-1 overflow-auto flex flex-col gap-2">
          <div className="flex gap-4 mt-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80"
              alt="Order 1"
              className="xl:w-[100px] w-[80px] h-[80px] xl:h-[100px] rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium">Jeans with sequins</h2>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 text-[12px] text-gray/60">
                  <p>
                    Size: <span className="text-[14px] text-black">XL</span>
                  </p>
                  <p>
                    Color: <span className="text-[14px] text-black">Blue</span>
                  </p>
                </div>
                <div className="text-gray/60 text-[12px]">
                  <p>
                    <span className="font-medium text-[16px] text-black">
                      Rs.4000
                    </span>{" "}
                    x 02
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80"
              alt="Order 1"
              className="xl:w-[100px] w-[80px] h-[80px] xl:h-[100px] rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium">Jeans with sequins</h2>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 text-[12px] text-gray/60">
                  <p>
                    Size: <span className="text-[14px] text-black">XL</span>
                  </p>
                  <p>
                    Color: <span className="text-[14px] text-black">Blue</span>
                  </p>
                </div>
                <div className="text-gray/60 text-[12px]">
                  <p>
                    <span className="font-medium text-[16px] text-black">
                      Rs.4000
                    </span>{" "}
                    x 02
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 items-center">
            <img
              src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&h=250&q=80"
              alt="Order 1"
              className="xl:w-[100px] w-[80px] h-[80px] xl:h-[100px] rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium">Jeans with sequins</h2>
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 text-[12px] text-gray/60">
                  <p>
                    Size: <span className="text-[14px] text-black">XL</span>
                  </p>
                  <p>
                    Color: <span className="text-[14px] text-black">Blue</span>
                  </p>
                </div>
                <div className="text-gray/60 text-[12px]">
                  <p>
                    <span className="font-medium text-[16px] text-black">
                      Rs.4000
                    </span>{" "}
                    x 02
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-3 mt-0">
            <hr className="text-sm text-gray/20" />
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray/40">Subtotal</p>
              <p className="text-sm font-medium">Rs.10000.00</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray/40">Delivery Charge</p>
              <p className="text-sm font-medium">Rs2000.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray/40">Discount</p>
              <p className="text-sm font-medium">-Rs.1000.00</p>
            </div>
            <hr className="text-sm text-gray/20" />
          </div>

          <div className="flex justify-between items-center mt-2">
            <h2 className="text-lg font-bold">Total</h2>
            <h2 className="text-lg font-bold">Rs.11000.00</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourOrder;
