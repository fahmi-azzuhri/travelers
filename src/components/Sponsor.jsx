import React from "react";
import { Container } from "react-bootstrap";
import Turkish from "../assets/Turkish_Airlines-Logo.png";
import Expedia from "../assets/Expedia-Logo.png";
import Skyscanner from "../assets/Skyscanner-Logo.png";
import SunExpress from "../assets/SunExpress-Logo.png";
const Sponsor = () => {
  return (
    <Container>
      <div className="flex flex-wrap text-center">
        <img src={Expedia} alt="" />
        <img src={Skyscanner} alt="" />
        <img src={Turkish} alt="" />
        <img src={SunExpress} alt="" />
      </div>
    </Container>
  );
};

export default Sponsor;
