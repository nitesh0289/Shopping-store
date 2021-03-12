import React from "react";
// import { Link } from "react-router-dom";

import colors from "../config/colors";
import "./components/Home.css";
import Home2 from "./Home2";

function Home() {
  return (
    <>
      <div className="fluid-container container1">
        <div className="row">
          <div className="content">
            <div className="intro">
              <h1 className="title" style={{ color: colors.dark }}>
                Shopping Website
              </h1>
              <h4 className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                nisi non voluptatem consectetur, voluptas cumque dolorem ex
                ducimus quae modi exercitationem fugiat accusamus labore
                voluptates itaque quisquam at earum voluptate.
              </h4>
              {/* <Link to="/" className="scroll-to"> */}
              <div
                className="btn mt-5"
                style={{
                  color: colors.white,
                }}
              >
                Let's CatchUp
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </>
  );
}

export default Home;
