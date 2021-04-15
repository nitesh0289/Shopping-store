import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import cart from "../../assets/icons/shopping-bag.png";
import search from "../../assets/icons/search.png";
import logo from "../../assets/icons/mypost1.png";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const $ = window.$;
  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
  });

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log("user: ", user);
  }, [user]);

  const handleLogout = () => {
    dispatch({
      type: "SET_USER",
      user: [],
    });
    window.location.reload(false);
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" width="100%" />
        </Link>
      </div>
      <div className="search-box">
        <span className="input-box">
          <input placeholder="search item" className="input-field" />
        </span>
        <span className="search-icon-container">
          <img src={search} width="30px" />
        </span>
      </div>
      <div className="nav-list-container">
        <div>
          <div className="first-line">Returns</div>
          <div className="second-line">& Orders</div>
        </div>
        <div>
          <div className="first-line">
            {user.length !== 0 ? "Hi " : "Hello "}
            <span style={{ fontStyle: "italic", fontWeight: 600 }}>
              {user.length !== 0 ? user[0].name : "Guest"}
            </span>
          </div>

          <div className="second-line">
            {user.length !== 0 ? (
              <span onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </span>
            ) : (
              <a href="/login" style={{ color: "#fff" }}>
                Login
              </a>
            )}
          </div>
        </div>
        <div>
          <img src={cart} width="35px" />
          <sub className="cart-value">0</sub>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
