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
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <p>Paris, Île-de-France</p>
                    <div>
                        <p>Cozy</p>
                        <p>Canal</p>
                        <p>Paris 10</p>
                    </div>
                    <div>
                        <p>Alexandre Dumas</p>
                        <div>
                         <p>Etoiles</p>   
                        </div>
                    </div>
                </div>
                <Collapse />
                <Footer />
            </div>
            
        </div>
    );
};

export default Logement;