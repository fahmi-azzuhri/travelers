import React from "react";
import expediaLogo from "../assets/img/expediaLogo.png";
import skyScannerLogo from "../assets/img/skyScannerLogo.png";
import sunExpressLogo from "../assets/img/sunExpressLogo.png";
import turkishAirlineLogo from "../assets/img/turkishAirlineLogo.png";
const Sponsor = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center">
      <img src={expediaLogo} alt="" />
      <img src={skyScannerLogo} alt="" />
      <img src={turkishAirlineLogo} alt="" />
      <img src={sunExpressLogo} alt="" />
    </div>
  );
};

export default Sponsor;
