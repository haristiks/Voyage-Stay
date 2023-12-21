import React from "react";
import logo from "../assets/Logo/VoyageStaylogo.png";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <img
      alt="voyageStay-logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src={logo}
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
