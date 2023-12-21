import React from "react";
import profilepic from "../assets/profile/Placeholder.png";

function Avatar({ src }) {
  return (
    <img
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || profilepic}
    />
  );
}

export default Avatar;
