import React from 'react';

const Tags = (slogan) => {
    return (
        <div className="tag">
            <p className="tag__slogan">{slogan.tag}</p>
        </div>
    );
};

export default Tags;