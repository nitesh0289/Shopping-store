import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import colors from "../../config/colors";
import shoppingCart from "../../assets/icons/shopping-cart.png";

function Navbar() {
  const $ = window.$;
  $(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-default fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={shoppingCart} className="logo" alt="" />
            <div className="branding" style={{ color: colors.black }}>
              Shopping Website
            </div>
          </div>
          <div className="spacer" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa fa-bars" style={{ color: colors.dark }} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto col-md-12"
              style={{ marginRight: "10%" }}
            >
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-item nav-li"
              >
                <li className="nav-link">Home</li>
              </NavLink>

              <NavLink
                exact
                to="/"
                className="nav-item nav-li"
                activeClassName="active"
              >
                <li className="nav-link">Products</li>
              </NavLink>

              <NavLink
                exact
                to="/info"
                className="nav-item nav-li"
                activeClassName="active"
              >
                <li className="nav-link">Info</li>
              </NavLink>

              <NavLink
                exact
                to="/aboutUs"
                className="nav-item nav-li"
                activeClassName="active"
              >
                <li className="nav-link">About Us</li>
              </NavLink>

              <NavLink
                exact
                to="/account"
                className="nav-item nav-li"
                activeClassName="active"
              >
                <li className="nav-link">Account</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
