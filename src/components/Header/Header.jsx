import React from "react";
// import "./Header.css";

import BottomNav from "./BottomNav";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Container from "../Container";
import Logo from "../Logo";
import UserMenu from "./UserMenu";
import Categories from "./Categories";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full bg-white shadow-sm z-20">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
            <BottomNav />
          </div>
        </Container>
        <Categories />
      </div>
    </div>
  );
}

export default Header;
