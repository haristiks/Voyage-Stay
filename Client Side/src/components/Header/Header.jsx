import React from "react";
import "./Header.css";
import logo from "../../assets/Logo/VoyageStaylogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProfileMenu from "./ProfileMenu";
import BottomNav from "./BottomNav";
import MobileSearch from "../Mobile Searh Bar/MobileSearch";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="Voyage-Stay-logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any week</div>
        <div className="search-bar-text2">Add guests</div>
        <div className="search-icon-div">
          <SearchOutlinedIcon className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div
          className="voyagestay-host"
          onClick={() => {
            setHost(!host);
            navigate("/voyageStayHost");
          }}
        >
          Voyage Stay Host
        </div>
        <div className="profile-div">
          <ProfileMenu />
        </div>
      </div>
      <MobileSearch />
      <BottomNav />
    </div>
  );
}

export default Header;
