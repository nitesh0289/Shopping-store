import React, { useState } from "react";
import { Card, Carousel } from "antd";
import CrouselComp from "./CrouselComp";
import cart from "../../assets/icons/cart.png";

export function IntroCard(props) {
  return (
    <div className="cardBox pl-3 pr-3">
      <div className="iconBox">
        <img src={props.icon} className="introIcon" />
      </div>
      <div className="cardTitle">{props.title}</div>
      <div className="cardIntro">{props.intro}</div>
    </div>
  );
}

export function CategoryCard(props) {
  return (
    <div
      className="cardBox2 col-lg-3 col-sm-5 m-2"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.426), rgba(0, 0, 0, 0.426)),url(" +
          props.bg +
          ")",
      }}
    >
      <div style={{ marginTop: "auto" }}>
        <div className="cardTitle2">{props.title}</div>
        <div className="cardIntro2">{props.para}</div>
        <div className="btn mt-1" onClick={() => props.callback(props.title)}>
          Shop Now
        </div>
      </div>
    </div>
  );
}

export function OccasionCard(props) {
  return (
    <div className="cardBox3 px-4 mx-3 mb-3">
      <div className="cardImgBox">
        <img className="cardImg" src={props.occassionImg} />
      </div>
      <div className="mt-3">
        <h3 className="occassionTitle">{props.occassion}</h3>
      </div>
    </div>
  );
}

export function ItemCard(props) {
  const [heart, setHeart] = useState(props.heartType);
  const sizes = props.sizes;

  return (
    <div className="col-lg-3 col-sm-6 mb-5">
      <Card
        className="itemCard cardEx ml-2 mr-2"
        cover={
          <>
            <div
              className="logoCont"
              style={{ position: "absolute", zIndex: 1000 }}
            >
              <div style={{ flex: 1 }} />
              <img
                src={heart}
                className="logo1"
                style={{ borderRadius: "50%" }}
                onClick={() =>
                  props.callback(
                    props.id,
                    props.img,
                    props.title,
                    props.price,
                    heart,
                    setHeart
                  )
                }
              />
            </div>
            <Carousel>
              <CrouselComp item={props} />
              <CrouselComp item={props} />
            </Carousel>
          </>
        }
      >
        <div style={{ marginTop: "-1.5em" }}>
          <div className="itemTitle">{props.title}</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <div className="itemPrice ">₹{props.price}</div>
              <div className="hide">
                <div style={{ textAlign: "left" }}>
                  <h6>
                    <span>size:</span>
                    {sizes.map((size) => (
                      <span className="sizes">{size}</span>
                    ))}
                  </h6>
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }} />
            <div>
              <img
                src={cart}
                className="logo1 cartIcon"
                style={{ borderRadius: "50%" }}
                onClick={() =>
                  props.item.callback(
                    props.item.id,
                    props.item.img,
                    props.item.title,
                    props.item.price
                  )
                }
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
