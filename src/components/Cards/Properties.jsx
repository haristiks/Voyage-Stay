import React from "react";
import { list } from "../../assets/sample-properties";
import ListingCard from "./ListingCard";

function Properties() {
  return (
    <div className="pt-24 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {list.map((card, index) => (
        <ListingCard Card={card} key={index}/>
      ))}
    </div>
  );
}

export default Properties;
