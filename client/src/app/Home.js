import { Carousel } from "antd";
import React from "react";

import "./Home.css";
import Home2 from "./Home2";
import poster1 from "../assets/poster1.gif";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";

function Home() {
  return (
    <>
      <div
        style={{
          padding: "0.5rem 5%",
          minWidth: "1200px",
        }}
      >
        <Carousel autoplay>
          <div>
            <img src={poster2} className="posterImage" />
          </div>
          <div>
            <img src={poster1} className="posterImage" />
          </div>
          <div>
            <img src={poster3} className="posterImage" />
          </div>
        </Carousel>
        <div className="container2">
          <div className="subContainer1">
            <div className="subContainerTitle">MENS</div>

            <div className="subContainer2">
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://theadultman.com/wp-content/uploads/2019/11/Best-Jeans-for-Men-Model-Outside-Leaning-Against-Guard-Rail-Wearing-Slim-Fit-Dark-Wash-Jeans-and-Black-Boots.jpg"
                  alt="men's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/2111/9922/COODRONY-Men-Shirt-Mens-Business-Casual-Shirts-2017-New-Arrival-Men-Famous-Brand-Clothing-Plaid-Long__90791.1574660755.jpg?c=2?imbypass=on"
                  alt="men's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://www.beyoung.in/media/catalog/product/cache/b2c9222954ccc348538ca5801698d4c1/g/a/game_over_army_green_hoodie_men_model_1.jpg"
                  alt="men's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2014/02/Mens-Accessories-TGJ.00.jpg"
                  alt="men's item"
                />
              </div>
            </div>
          </div>
          <div className="subContainer1">
            <div className="subContainerTitle">WOMENS</div>
            <div className="subContainer2">
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://i.pinimg.com/originals/c5/dc/6b/c5dc6bcfce4307de0911f0e6c2ee5564.jpg"
                  alt="women's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://i.pinimg.com/originals/63/c9/dc/63c9dc3d1a6004a2b7606feb8c0e35c2.jpg"
                  alt="women's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://i.pinimg.com/236x/b1/b4/3c/b1b43c5ece7ed94b7ac9f9b69e5c9796.jpg"
                  alt="women's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://one-dollar-shopping.com/wp-content/uploads/2019/01/Beauty-Accessories-Women-Love.jpg"
                  alt="Women's item"
                />
              </div>
            </div>
          </div>
          <div className="subContainer1">
            <div className="subContainerTitle">KIDS</div>
            <div className="subContainer2">
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://img.ltwebstatic.com/images3_pi/2019/09/24/15693153432a4190b2a366542896495b43050d6524_thumbnail_600x.webp"
                  alt="kid's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190801-index-back-to-school-outfit-1564674649.png?crop=0.345xw:0.691xh;0.655xw,0.00651xh&resize=640:*"
                  alt="kid's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://i.pinimg.com/564x/71/35/42/713542c14bed7bd2fc53c5d85ccd9141.jpg"
                  alt="kid's item"
                />
              </div>
              <div className="subContainer3">
                <img
                  className="img"
                  src="https://image.shutterstock.com/z/stock-photo-what-to-take-for-kids-on-beach-142229407.jpg"
                  alt="kid's item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </>
  );
}

export default Home;
