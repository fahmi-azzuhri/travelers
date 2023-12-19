import React from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import avatar1 from "../assets/img/avatar1.png";
import avatar2 from "../assets/img/avatar2.png";
import avatar3 from "../assets/img/avatar3.png";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar className="me-4 text-xl text-yellow-900" />);
  }
  return (
    <div className="container grid lg:grid-cols-2 grid-cols-1 mx-auto">
      <Avatar className="w-96 h-96" src={avatar1} alt="avatar" />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-16">Reviews</h1>
        <p className="text-gray-500 font-bold text-xl mb-6">
          “From the moment I discovered (Adventures Unlimited,) I knew I had
          stumbled upon a gem in the travel industry. ”
        </p>
        <div className="flex flex-row mb-6">{stars}</div>
        <div className="flex flex-row  justify-around">
          <figure>
            <Avatar className="w-32 h-32" src={avatar1} alt="avatar" />
            <Typography
              as="caption"
              variant="small"
              className="mt-2 text-center font-bold"
            >
              Jean Arch
            </Typography>
          </figure>
          <figure>
            <Avatar className="w-32 h-32" src={avatar2} alt="avatar" />
            <Typography
              as="caption"
              variant="small"
              className="mt-2 text-center font-bold"
            >
              Ruhi Hassan
            </Typography>
          </figure>
          <figure>
            <Avatar className="w-32 h-32" src={avatar3} alt="avatar" />
            <Typography
              as="caption"
              variant="small"
              className="mt-2 text-center font-bold"
            >
              Dimitri Mean
            </Typography>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Review;
