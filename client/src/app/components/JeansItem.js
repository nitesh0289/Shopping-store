import React from "react";
import { Breadcrumb, Row } from "antd";

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
      className="site-layout-background col-lg-12 p-4"
      style={{
        backgroundColor: "#e3e4e6",
      }}
    >
      <div className="mb-3" style={{ fontWeight: "600" }}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item>{props.type} Shopping</Breadcrumb.Item>
          <Breadcrumb.Item>Jeans Category</Breadcrumb.Item>
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

export default JeansItem;
