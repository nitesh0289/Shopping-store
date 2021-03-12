import React from "react";
import { Breadcrumb, Row } from "antd";

import { ItemCard } from "./Cards";
import getTshirtsXY from "../Products/T_Shirt";
import getTshirtsXX from "../Products/T_shirt_Girls";
import heartUnFilled from "../../assets/icons/heart.png";
import heartFilled from "../../assets/icons/heart-filled.png";

function TShirts(props) {
  const products = [];
  let jeans;
  switch (props.type) {
    case "Mens":
      jeans = getTshirtsXY();
      for (let i = 0; i < jeans.length; ++i) products.push(jeans[i]);
      break;
    case "Girls":
      jeans = getTshirtsXX();
      products.splice(0, products.length);
      for (let i = 0; i < jeans.length; ++i) products.push(jeans[i]);
      break;
    default:
      console.log("404 Page");
  }

  const handlePay = (id, img, title, price, heart, setHeart) => {
    heart === heartFilled ? setHeart(heartUnFilled) : setHeart(heartFilled);
    console.log(`id: ${id}, title: ${title}, price: ${price}`);
  };

  return (
    <div
      className="site-layout-background col-lg-12 p-4"
      style={{
        backgroundColor: "#e3e4e6",
      }}
    >
      <div className="mb-3" style={{ fontWeight: "600" }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Products</Breadcrumb.Item>
          <Breadcrumb.Item href="/products">
            {props.type} Shopping
          </Breadcrumb.Item>
          <Breadcrumb.Item>T_Shirt Category</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row gutter={10}>
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
      </Row>
    </div>
  );
}

export default TShirts;
