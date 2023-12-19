import React from "react";
import { CardDestinations } from "./CardDestinations";
import { FaHotel, FaBed } from "react-icons/fa";
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
      <div className="flex lg:flex-row flex-col mb-16">
        {destinations.map((destination, index) => (
          <CardDestinations key={index} {...destination} />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-5">
            Escape to paradise: discover unforgettable luxury at our exquisite
            travel hotel
          </h1>
          <p className="text-gray-500 mb-5">
            We provide hotels for your vacation to stay comfortable
          </p>
          <div className="flex flex-row mb-16">
            <div className="border border-blue-100 bg-blue-100 rounded-xl py-2 px-2 flex flex-row">
              <div className="border border-black bg-black rounded-xl px-3 py-1 me-1">
                <FaHotel className="mt-1 me-1 text-2xl text-white" />
              </div>
              <span className="font-bold text-xl mt-1">Hotel</span>
            </div>
            <div className="mx-3 border border-blue-100 bg-blue-100 rounded-xl py-2 px-2 flex flex-row">
              <div className="border border-black bg-black rounded-xl px-3 py-1 me-1">
                <FaBed className="mt-1 me-1 text-2xl text-white" />
              </div>
              <span className="font-bold text-xl mt-1">Sleep Room</span>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="mx-1 bg-blue-500 text-white rounded-xl px-5 py-2">
              <p className="text-white text-xl">Booking now!</p>
            </button>
          </div>
        </div>
        <img
          className="w-full h-[380px] border rounded-xl"
          src="https://loremflickr.com/400/380?cat"
        />
      </div>
    </div>
  );
};

export default Destinations;
