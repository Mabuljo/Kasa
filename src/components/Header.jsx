import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navBar">
      <img src="./logo.svg" alt="logo Kasa" />
      <ul className="navBar__link">
        <NavLink to="/" className={(nav) => 
            nav.isActive ? "nav-active" : ""
          }>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(nav) => 
            nav.isActive ? "nav-active" : ""
          }>
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
