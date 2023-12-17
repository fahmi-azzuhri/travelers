import React from "react";
import header from "../assets/img/header.png";
const Header = () => {
  return (
    <header>
      <img src={header} alt="" className="header-padding lg:w-full" />
    </header>
  );
};

export default Header;
