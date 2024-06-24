import React from 'react';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';


const Logement = () => {
    return (
        <div>
            <Gallery />
            <div>
                <div>
                    <h1>title</h1>
                    <p>location</p>
                    <div>
                        <p>tags</p>
                    </div>
                    <div>
                        <p>host.name</p>
                        <img src="hoste.picture" alt="l'hote" />
                        
                        <div>
                         <p>rating = étoiles</p>   
                        </div>
                    </div>
                </div>
                <Collapse />
                {/* Dans ce collapse on à la description */}
                <Collapse />
                {/* Dans ce collapse on à le tableau [equipments] */}
            </div>
            
        </div>
    );
};

export default Logement;