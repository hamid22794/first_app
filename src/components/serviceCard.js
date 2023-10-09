import React from "react";

const ServiceCard = ({ cardImage, title }) => {
  return (
    <div className="service_card">
      <img src={cardImage} alt="" />
      <div className="overlay">
        <div className="">
          <h2> {title} </h2>
          <button style={{ margin: "auto" }}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
