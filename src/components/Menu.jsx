import React, { useState } from "react";
import { navLinks } from "../constants/index.js";

const Menu = ({
  menuStyle,
  linkStyle,
  mobile = false,
  setActive,
  setToggle = null,
  active,
}) => {
  const handleListClick = (link) => {
    setActive(link.title);
    setToggle(false);
  };
  return (
    <ul className={menuStyle}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-white" : "text-secondary"
          } ${linkStyle}`}
          onClick={() =>
            mobile ? handleListClick(link) : setActive(link.title)
          }
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
