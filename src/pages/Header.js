import React from "react";
import "./css/Header.css";
function Header() {
  return (
    <header>
      <nav className="head">
        <img className="headlogo" src="https://res.cloudinary.com/benferanmi/image/upload/v1656538101/Logo_mtkbiv.png" alt="Website Logo"/>
        <h5>EN <img className="enimg" src="https://res.cloudinary.com/benferanmi/image/upload/v1657035025/donate/arrowdown_d4rkvq.jpg" alt="arrow down"/></h5>
      </nav>
      <hr className="head-hr" />
    </header>
  );
}

export default Header;
