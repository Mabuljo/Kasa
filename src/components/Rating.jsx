import React from 'react';

const Rating = (star) => {
    const scoreTotal = [1, 2, 3, 4, 5];
    return (
        <div className="stars">
            {scoreTotal.map((score) =>
            star.rating >= score ? (<i class="fa-solid fa-star fa-lg red-star"></i>):(<i class="fa-solid fa-star fa-lg grey-star "></i>)
            )}  
        </div>
    );
};

export default Rating;