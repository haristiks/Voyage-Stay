import React from "react";


// import { IconType } from "react-icons"

function CategoryBox({ icon: Icon, label }) {
  

  return (
    <>
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </>
  );
}

export default CategoryBox;
