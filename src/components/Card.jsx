import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ logement }) => {
  return (
    <NavLink to={`/logement/${logement.id}`} >
      <div className="card">
      <img src={logement.cover} alt={logement.title} />
      <h2>{logement.title}</h2>
      </div>
    </NavLink>
  );
};

export default Card;