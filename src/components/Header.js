import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navBar">
      <img src="./logo.svg" alt="logo Kasa" />
      <ul className="navBar__link">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
