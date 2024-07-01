import React from "react";
import { NavLink } from "react-router-dom";
import logoAccueil from "../images/logo.svg"

const Header = () => {
  return (
    <div className="navBar">
      <img src={logoAccueil} alt="logo Kasa" />
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
