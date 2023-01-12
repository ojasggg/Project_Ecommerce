import React from "react";

const imgUrl = [
  "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80",
  "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80",
  "https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80",
  "https://images.unsplash.com/photo-1624124959947-5fa0f8886507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&h=350&q=80",
];

const ItemImages = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <img
        src={imgUrl[0]}
        alt="img1"
        className="col-span-3 xl:w-full xl:h-[400px] w-[300px] rounded-xl object-cover"
      />
      <img
        src={imgUrl[1]}
        alt="img2"
        className="xl:w-full w-[90px] rounded-xl object-cover"
      />
      <img
        src={imgUrl[2]}
        alt="img3"
        className="xl:w-full w-[90px]  rounded-xl object-cover"
      />
      <img
        src={imgUrl[3]}
        alt="img4"
        className="xl:w-full w-[90px] rounded-xl object-cover"
      />
    </div>
  );
};

export default ItemImages;
