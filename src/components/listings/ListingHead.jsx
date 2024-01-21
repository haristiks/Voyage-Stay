import React from "react";
import useCountries from "../../hooks/useContries";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

function ListingHead({ id, title, imageSrc, locationValue }) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Heading
          title={title}
          subtitle={`${location?.region},${location?.label}`}
        />
        <img
          src={imageSrc}
          alt="Image"
          className="object-cover w-full h-full rounded"
        />
        <div className="absolute top-5 right-5 ">
          <HeartButton listingId={id} />
        </div>
      </div>
    </>
  );
}

export default ListingHead;
