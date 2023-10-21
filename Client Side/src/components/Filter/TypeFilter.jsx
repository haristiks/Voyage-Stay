import React from "react";
import "./typefilter.css";
import { links } from "../../assets/image-links";

function TypeFilter() {
  return (
    <div className="type-filter">
      {links.map((item, index) => (
        <div className="links-box" key={index}>
          <img src={item.imgSrc} alt={item.label} className="links-img"/>
          <p className="links-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default TypeFilter;
