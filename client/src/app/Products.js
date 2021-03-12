import React from "react";
import { OccasionCard } from "./components/Cards";
import "./Products.css";
import { Carousel } from "antd";
import Footer1 from "./components/Footer1";
import poster1 from "../assets/poster1.gif";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import mensCategory from "../assets/mensCategory.jpg";
import girlCategory from "../assets/girlCategory.jpg";
import womensCategory from "../assets/womensCategory.jpg";
import kids from "../assets/kids.webp";
import pets from "../assets/pets.webp";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <div className="fluid-container mx-5" style={{ margin: "4.5em 0 0 0" }}>
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
      </div>
      <div className="mx-3 my-5">
        <h1 className="title mt-2" style={{ textAlign: "center" }}>
          Shop By Category
        </h1>
        <div className="underline" />
        <div className="mt-5 mx-5 cardContainer">
          <Link to="/mensShop">
            <OccasionCard occassion="Male Outfit" occassionImg={mensCategory} />
          </Link>
          <Link to="/girlsShop">
            <OccasionCard
              occassion="Girls Outfit"
              occassionImg={girlCategory}
            />
          </Link>
          <OccasionCard
            occassion="Women Outfit"
            occassionImg={womensCategory}
          />
          <OccasionCard occassion="Kids Clothing" occassionImg={kids} />
          <OccasionCard occassion="Pets Clothing" occassionImg={pets} />
        </div>
      </div>
      <div className="mx-3 my-5">
        <h1 className="title mt-2" style={{ textAlign: "center" }}>
          Shop By Occassion
        </h1>
        <div className="underline" />
        <div className="mt-5 mx-5 cardContainer">
          <OccasionCard
            occassion="Festival Wear"
            occassionImg="http://www.babycouture.in/blog/wp-content/uploads/2014/10/family-and-diwali.jpg"
          />
          <OccasionCard
            occassion="Wedding Wear"
            occassionImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3JEdumoLgM8ZPVZpsV_SIsDLqLeGKldPUg33OxXEVArR3np7OrsspD3Gqt66CFg2QVo&usqp=CAU"
          />
          <OccasionCard
            occassion="Party Wear"
            occassionImg="https://i.pinimg.com/564x/45/5e/05/455e05d4cb76adaa2ac562ebff8e35b9.jpg"
          />
          <OccasionCard
            occassion="Office Wear"
            occassionImg="https://ae01.alicdn.com/kf/Hc7db6acacb3d47a49cc89a4d79e24bf5f/Free-shipping-2019-Fashion-men-women-blazer-suit-office-uniforms-slim-fit-business-wear-clothes-set.jpg_Q90.jpg_.webp"
          />
          <OccasionCard
            occassion=" Casual Outfit"
            occassionImg="https://image.made-in-china.com/202f0j00QVzfMdpEqgqh/Unisex-Custom-Fashion-Polo-Shirts-Breathable-Material-Casual-Wear-Men-Women-Polo-Shirts-Fashion-Shirts.jpg"
          />
        </div>
      </div>
      <div className="mx-3 my-5">
        <h1 className="title mt-2" style={{ textAlign: "center" }}>
          Shop By Outfits
        </h1>
        <div className="underline" />
        <div className="mt-5 mx-5 cardContainer">
          <div>
            <OccasionCard
              occassion="Jeans"
              occassionImg="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1598898953-best-jeans-for-men-6-1598898919.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A"
            />
            <OccasionCard
              occassion="Kurta Sets"
              occassionImg="https://assets.ajio.com/medias/sys_master/root/h86/h8d/16499083870238/-473Wx593H-461172004-blue-MODEL.jpg"
            />
          </div>
          <div>
            {" "}
            <OccasionCard
              occassion="T-Shirts"
              occassionImg="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700889/2017/3/13/11489381574012-HRX-by-Hrithik-Roshan-Men-Black-Printed-T-shirt-5221489381573786-1.jpg"
            />
            <OccasionCard
              occassion="Sarees"
              occassionImg="https://i.pinimg.com/originals/02/41/25/024125b511b08886ae30df75cc4b4d7a.jpg"
            />
          </div>
          <div>
            <OccasionCard
              occassion=" Shirts"
              occassionImg="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/2111/9920/COODRONY-Men-Shirt-Mens-Business-Casual-Shirts-2017-New-Arrival-Men-Famous-Brand-Clothing-Plaid-Long__41310.1574660753.jpg?c=2?imbypass=on"
            />
            <OccasionCard
              occassion=" Dresses"
              occassionImg="https://img.faballey.com/Images/Product/DRS03979Z/d3.jpg"
            />
          </div>
          <div>
            <OccasionCard
              occassion="Trousers"
              occassionImg="https://ik.imagekit.io/mrbuttonin/MR-BUTTON-CATTRS01-41.jpg"
            />
            <OccasionCard
              occassion="Gown"
              occassionImg="https://5.imimg.com/data5/EJ/AG/MY-44534711/ladies-party-wear-gown-500x500.jpg"
            />
          </div>
          <div>
            <OccasionCard
              occassion="Shoes"
              occassionImg="https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg"
            />
            <OccasionCard
              occassion="Sandals"
              occassionImg="https://rukminim1.flixcart.com/image/332/398/kflftzk0-0/sandal/t/c/t/ft-501-fashion-tails-black-original-imafwyfy9sznkdxq.jpeg?q=50"
            />
          </div>
        </div>
      </div>
      <div className="mx-3 my-5">
        <h1 className="title mt-2" style={{ textAlign: "center" }}>
          Fassion Accessories
        </h1>
        <div className="underline" />
        <div className="mt-5 mx-5 cardContainer">
          <OccasionCard
            occassion="Watches"
            occassionImg="http://cdn.shopify.com/s/files/1/0304/3821/products/2018-Curren-Mens-Watches-Top-Brand-Luxury-Brown-Leather-Strap-Quartz-Watch-Men-Military-Sport-Waterproof_1200x1200.jpg?v=1530781405"
          />
          <OccasionCard
            occassion="Sunglasses"
            occassionImg="https://images.unsplash.com/photo-1577803645773-f96470509666?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <OccasionCard
            occassion="HandBags"
            occassionImg="https://images-na.ssl-images-amazon.com/images/I/51b7mivh35L.jpg"
          />
          <OccasionCard
            occassion="Headphones"
            occassionImg="https://images-na.ssl-images-amazon.com/images/I/71SJuaMyLDL._SL1500_.jpg"
          />
          <OccasionCard
            occassion="Others"
            occassionImg="https://i.pinimg.com/originals/ff/ea/b7/ffeab7a030c42c1d6daf895b26a426fa.jpg"
          />
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default Products;
