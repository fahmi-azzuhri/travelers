import React from "react";
import header from "../assets/img/header.png";
const Header = () => {
  return (
    <>
      <header>
        <img src={header} alt="" className="header-padding lg:w-full" />
        <div className="text-overlay">
          <h1 className="text-white mt-9 text-6xl font-bold hidden sm:inline md:inline lg:inline xl:inline tracking-wider">
            Let's travel the world
          </h1>
          <p className="pt-5 tracking-wider">
            Explore destinations, places, and unforgettable experiences
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
