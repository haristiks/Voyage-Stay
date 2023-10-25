import React from "react";
import "./Cards.css";
import PropertyCard from "./PropertyCard";

function Properties({ list }) {
  return (
    <div className="card-flex">
      {list.map((card, index) => (
        <PropertyCard card={card} key={index} />
      ))}
    </div>
  );
}

export default Properties;
