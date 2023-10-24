import React from "react";
import "./Cards.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function PropertyCard() {
  return (
    <div>
      <img
        src="https://a0.muscache.com/im/pictures/a1d94df4-0001-47ef-a45e-21db63919e79.jpg?im_w=1200"
        alt=""
        className="property-card-img"
      />
      <div className="property-info-flex">
        <h3>Place</h3>
        <div className="star-rating">
          <StarRoundedIcon />
          <p>4.88</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
