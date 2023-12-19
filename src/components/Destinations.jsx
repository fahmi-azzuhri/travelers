import React from "react";
import { CardDestinations } from "./CardDestinations";

const Destinations = () => {
  const destinations = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      location: "Indonesia",
      rating: 5.0,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      location: "Indonesia",
      rating: 5.0,
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      location: "Indonesia",
      rating: 5.0,
    },
  ];
  return (
    <div className="pt-5 container">
      <div className="justify-between flex flex-row">
        <h1 className="text-2xl font-bold">Popular destinations</h1>
        <span className="text-blue-400">Lihat semua</span>
      </div>
      <div className="flex lg:flex-row flex-col">
        {destinations.map((destination, index) => (
          <CardDestinations key={index} {...destination} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
