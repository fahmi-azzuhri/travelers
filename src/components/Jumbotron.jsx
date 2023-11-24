import React from "react";
import jumbotron from "../assets/jumbotron.png";
import { Container } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <>
      <Container fluid>
        <div className="jumbotron-container">
          <img src={jumbotron} alt="" className="w-100 h-100 jumbotron" />
          <div className="text-overlay">
            <h1 className="text-jumbo">Let's travel the World</h1>
            <p className="h5">
              Explore destinations, places, and unforgettable experiences
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Jumbotron;
