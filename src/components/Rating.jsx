import React from 'react';

const Rating = (star) => {
    const scoreTotal = [1, 2, 3, 4, 5];
    return (
        <div className="stars">
            {scoreTotal.map((score, index) =>
                star.rating >= score ? (<i className="fa-solid fa-star fa-lg red-star" key={index}></i>):(<i className="fa-solid fa-star fa-lg grey-star" key={index}></i>)
            )}  
        </div>
    );
};

export default Rating;