import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="card__banner">
      <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div>
        <NavLink to="/Logement">
          <img src="cover" alt="" />
          <p>title</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
