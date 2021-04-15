import React from "react";
import { useHistory } from "react-router-dom";

import { CategoryCard } from "./components/Cards";
import Men from "../assets/mensCategory.jpg";
import Girls from "../assets/girlCategory.jpg";
import Women from "../assets/womensCategory.jpg";
import Kids from "../assets/kids.webp";
import Watches from "../assets/watches.jpeg";
import Pets from "../assets/pets.webp";

function Home3() {
  const history = useHistory();

  const handleCategory = (title) => {
    switch (title) {
      case "Mens":
        history.push("/mensShop");
        break;
      case "Girls":
        history.push("/girlsShop");
        break;
      case "Womens":
        history.push("/womensShop");
        break;
      case "Kids":
        history.push("/kidsShop");
        break;
      case "Pets":
        history.push("/petsShop");
        break;
      default:
        console.log("404 Page");
    }
  };

  return (
    <>
      <div className="content2 col-lg-12" id="products">
        <div className="intro2">
          <h1 className="title mt-5" style={{ textAlign: "center" }}>
            Shop By Catagory
          </h1>
          <div className="underline" />
          <div className="cardsContainer mt-3 mb-5">
            <CategoryCard
              bg={Men}
              title="Mens"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              callback={handleCategory}
            />
            <CategoryCard
              bg={Girls}
              title="Girls"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              callback={handleCategory}
            />
            <CategoryCard
              bg={Women}
              title="Womens"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              callback={handleCategory}
            />
            <CategoryCard
              bg={Kids}
              title="Kids"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              callback={handleCategory}
            />
            <CategoryCard
              bg={Watches}
              title="Watches"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              callback={handleCategory}
            />
            <CategoryCard
              bg={Pets}
              title="Pets"
              para="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              callback={handleCategory}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home3;
