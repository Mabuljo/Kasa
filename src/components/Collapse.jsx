import React, { useState } from 'react';

const Collapse = ({title, description}) => {
    const [isOpen, setIsOpen] = useState(false); // L'état initial du collapse est sur false, donc fermé

    // la fonction inverse l'état du collapse
    const toggleCollapse = () => {
        setIsOpen(!isOpen); 
    };
        
    return (
        <div className="collapse">
            <div className="collapse__title" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-up collapse__icon ${isOpen ? " collapse__icon--open" : " collapse__icon--close"}`}></i>
            </div>
            <div className={`collapse__content ${isOpen ? "collapse__content--open" : "collapse__content--close"}`}>
                {description}
            </div>
        </div>
    );
};

export default Collapse;