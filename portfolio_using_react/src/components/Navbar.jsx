import React, { useState } from "react";
import "../../src/assets/css/navbar.css";
import { FaReact } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menuBar, setMenuBar] = useState(true);

  return (
    <nav className="navbar">
      <div className="logo">
        <FaReact className="logo-icon" />
      </div>
      <div className="menu-option">
        {menuBar ? (
          <CiMenuBurger
            className="menu-bar"
            onClick={() => {
              setMenuBar(false);
            }}
          />
        ) : (
          <RxCross1
            className="menu-bar"
            onClick={() => {
              setMenuBar(true);
            }}
          />
        )}

        <ul className={menuBar ? "menu-option-list" : "menu-option-list-sm"}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#skills">Skills & Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
