import React from "react";
import { CardDestinations } from "./CardDestinations";

const Destinations = () => {
  return (
    <div className="pt-5 container">
      <div className="justify-between flex flex-row">
        <h1 className="text-2xl font-bold">Popular destinations</h1>
        <span className="text-blue-400">Lihat semua</span>
      </div>
      <CardDestinations />
    </div>
  );
};

export default Destinations;
