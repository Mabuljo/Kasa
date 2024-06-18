import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = () => {
    return (
        <div>
            <NavLink to="/Logement">
            <img src="" alt="" />
            <p>Titre de la location</p>
            </NavLink>
        </div>
    );
};

export default Card;