import React from "react";
import "./Header.css";
import logo from "../../assets/Logo/VoyageStaylogo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ProfileMenu from "./ProfileMenu";
function Header() {
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
        <div className="voyagestay-host">Voyage Stay Host</div>
        <div className="profile-div">
            <ProfileMenu/>
        </div>
      </div>
    </div>
  );
}

export default Header;
