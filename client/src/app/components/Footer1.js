import React from "react";

function Footer() {
  return (
    <div className="col-lg-12 footer">
      <div className="iconHolder w-100">
        <div className="m-3">
          <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
        </div>
        <div className="m-3">
          <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </div>
        <div className="m-3">
          <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />
        </div>
        <div className="m-3">
          <img src="https://img.icons8.com/officel/46/000000/gmail-login.png" />
        </div>
      </div>
      <div className="title" style={{ textAlign: "center" }}>
        A Shopping Website
      </div>
      <div className="underline" />
      <div className="intro2 mt-5" style={{ textAlign: "center" }}>
        © 2021 A_phenomenal1. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
