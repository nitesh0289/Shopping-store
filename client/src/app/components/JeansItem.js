import React from "react";
import { Breadcrumb } from "antd";

import { ItemCard } from "./Cards";
import getJeansXY from "../Products/Jeans";
import getJeansXX from "../Products/GirlsJeans";
import heartUnFilled from "../../assets/icons/heart.png";
import heartFilled from "../../assets/icons/heart-filled.png";

function JeansItem(props) {
  const products = [];
  let jeans;
  switch (props.type) {
    case "Mens":
      jeans = getJeansXY();
      for (let i = 0; i < jeans.length; ++i) products.push(jeans[i]);
      break;
    case "Girls":
      jeans = getJeansXX();
      products.splice(0, products.length);
      for (let i = 0; i < jeans.length; ++i) products.push(jeans[i]);
      break;
    default:
      console.log("404 Page");
  }

  console.log("products: ", products);
  const handlePay = (id, img, title, price, heart, setHeart) => {
    heart === heartFilled ? setHeart(heartUnFilled) : setHeart(heartFilled);
    console.log(`id: ${id}, title: ${title}, price: ${price}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f4f4",
        height: "100%",
        marginLeft: "1.5rem",
      }}
    >
      <div style={{ margin: "1.5rem 0", fontWeight: 600 }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
          <Breadcrumb.Item>{props.type} Shopping</Breadcrumb.Item>
          <Breadcrumb.Item>Jeans Category</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="itemContainer">
        {products.map((val) => {
          return (
            <ItemCard
              key={val.itemId}
              id={val.itemId}
              img={val.itemImage}
              title={val.itemTitle}
              price={val.itemPrice}
              sizes={val.sizes}
              heartType={val.isWished ? heartFilled : heartUnFilled}
              callback={handlePay}
            />
          );
        })}
      </div>
    </div>
  );
}

export default JeansItem;
