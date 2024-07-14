import React, { useState } from 'react';
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right.png";

const Carousel = ({pictures}) => {
    const [picture, setPicture] = useState(0); // index de la 1e photo=0
    const picturesLength = pictures.length; // longueur du tableau des photos

    return (
        <div className="carousel">
            {picturesLength > 1 && (
                <>
                {pictures.map((slideActive, index) => (
                index === picture &&
                <img key={index} src={slideActive} alt="appartement à louer" className="carousel__picture"/>
                ))}
                <img src={arrowLeft} alt="Flèche de gauche" className="arrow arrow-left" onClick = {() => setPicture(picture === 0? picturesLength -1 : picture -1)} /> 
                <img src={arrowRight} alt="Flèche de droite" className="arrow arrow-right" onClick = {() => setPicture(picture === picturesLength -1? 0 : picture +1)} />
                <div className="carousel__compteur">
                    {picture +1}/{picturesLength}
                </div>
                </> 
            )}
        </div>
    );
};

export default Carousel;