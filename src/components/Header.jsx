import React from "react";
import header from "../assets/img/header.png";
import { Menu } from "./Menu";

const Header = () => {
  return (
    <>
      <header className="relative">
        <img src={header} alt="" className="w-full header-padding h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col mt-16">
          <h1 className="text-6xl text-white font-bold tracking-wider hidden lg:inline">
            Let's travel the world
          </h1>
          <p className="pt-5 text-white tracking-wide hidden lg:inline mb-16">
            Explore destinations, places, and unforgettable experiences
          </p>
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
