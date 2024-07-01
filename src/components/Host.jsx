import React from 'react';

const Host = (host) => {
    return (
        <div className="host">
            <p>{host.hostName}</p>
            <img src={host.hostPicture} alt={host.name} />
        </div>
    );
};

export default Host;