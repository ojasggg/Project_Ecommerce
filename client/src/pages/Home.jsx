import React from "react";
import { Carousel, Category, Items, Tags } from "../components";
import { itemsData } from "../data/items";
import { tshirtData } from "../data/bestTshirt";
import EntireItems from "../components/EntireItems";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="mx-20 xl:mx-60">
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
        <Tags />
        <EntireItems />
      </div>
    </div>
  );
};

export default Home;
