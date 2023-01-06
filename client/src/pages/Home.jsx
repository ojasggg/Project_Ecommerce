import React from "react";
import { Carousel, Category, Items } from "../components";
import { itemsData } from "../data/items";
import { tshirtData } from "../data/bestTshirt";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <Items
        data={itemsData}
        heading={"Special Product for you"}
        timeLeft={true}
      />
      <Items
        data={tshirtData}
        heading={"Best T-shirt for you"}
        timeLeft={false}
      />
    </div>
  );
};

export default Home;
