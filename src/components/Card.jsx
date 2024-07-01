import React from "react";
import { Link } from "react-router-dom";

const Card = ({ logement }) => {
  return (
      <Link to={`/logement/${logement.id}`} >
      <div className="card">
        <img src={logement.cover} alt={logement.title} />
        <div className="card__filter">
          <h2>{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;