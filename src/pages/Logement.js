import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';


const Logement = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <div>
                <div>
                    <h1>title</h1>
                    <p>location</p>
                    <div>
                        <p>tags</p>
                    </div>
                    <div>
                        <p>host.name</p>
                        <img src="hoste.picture" alt="photo de l'hote" />
                        
                        <div>
                         <p>rating = étoiles</p>   
                        </div>
                    </div>
                </div>
                <Collapse />
                {/* Dans ce collapse on à la description */}
                <Collapse />
                {/* Dans ce collapse on à le tableau [equipments] */}
                <Footer />
            </div>
            
        </div>
    );
};

export default Logement;