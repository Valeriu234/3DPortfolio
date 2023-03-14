import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { Menu } from "../components";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleImage = toggle ? close : menu;

  const menuMobileProps = {
    menuStyle: "list-none flex justify-end items-start flex-col gap-4",
    linkStyle: "font-poppins font-medium cursor-pointer text-[16px]",
    mobile: true,
    setActive: setActive,
    active: active,
    setToggle: setToggle,
  };

  const menuDesktopProps = {
    menuStyle: "list-none hidden sm:flex flex-row gap-10",
    linkStyle: "hover:text-white text-[18px] font-medium cursor-pointer",
    setActive: setActive,
    active: active,
  };

  const logoHandleClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };
  const menuHandleClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={logoHandleClick}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Valeriu &nbsp;
            <span className="sm:block hidden">| React Developer</span>
          </p>
        </Link>
        <Menu {...menuDesktopProps} />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggleImage}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={menuHandleClick}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <Menu {...menuMobileProps} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
