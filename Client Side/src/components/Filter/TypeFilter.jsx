import React, { useState } from "react";
import "./typefilter.css";
import { links } from "../../assets/image-links";

function TypeFilter() {
  const [selectedFilter, setSelectedFilter] = useState("");
  return (
    <div className="type-filter">
      {links.map((item, index) => (
        <div
          key={index}
          className={`links-box ${index == selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("Selected Key : ", index);
            setSelectedFilter(index);
          }}
        >
          <img src={item.imgSrc} alt={item.label} className="links-img" />
          <p
            className={`links-label ${
              index == selectedFilter && "selected-label"
            }`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TypeFilter;
