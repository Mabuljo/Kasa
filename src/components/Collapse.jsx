import React, { useState } from 'react';

const Collapse = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(false); // L'état initial du collapse est sur false, donc fermé

    const toggleCollapse = () => {
        setIsOpen(!isOpen);  // la fonction inverse l'état du collapse
    };

    return (
        <div className="collapse">
            <div className="collapse__title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-up collapse__icon${!isOpen ? "--open" : ""}`}></i>
            </div>
            {/* si isOpen est true la description sera affichée */}
            {isOpen && (
                <div className="collapse__content">
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default Collapse;