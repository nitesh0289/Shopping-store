import React from "react";

import "./Home.css";
import { IntroCard } from "./components/Cards";
import Delivery from "../assets/icons/delivery-truck.png";
import Payment from "../assets/icons/payment.png";
import Discount from "../assets/icons/discount.png";
import Return from "../assets/icons/returnPurchase.png";
import Footer1 from "./components/Footer1";
import Home3 from "./Home3";
import Products from "./Products";

function Home2() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#d0daef",
          padding: "1rem 0",
          minWidth: "1200px",
        }}
      >
        <h2
          className="title"
          style={{
            textAlign: "center",
          }}
        >
          Our Services
        </h2>
        <div className="underline" />
        <div className="cardsContainer">
          <IntroCard
            icon={Delivery}
            title="Free Shipping"
            intro="Free shipping on all US order or order above ₹500"
          />
          <IntroCard
            icon={Discount}
            title="Awesome Discount"
            intro="Get Discount upto 40% on women clothings and scandles"
          />
          <IntroCard
            icon={Return}
            title="30 Days Return"
            intro="Simply return it within 30 days for an exchange"
          />
          <IntroCard
            icon={Payment}
            title="Secure Payment"
            intro="100% Secure. We ensure secure payment with RozorPay."
          />
        </div>
      </div>
      <Products />
    </>
  );
}

export default Home2;
