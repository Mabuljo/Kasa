import React, { useEffect, useState } from 'react';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import { useNavigate, useParams } from 'react-router-dom';
import logementsData from "../datas/logements.json";
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';


const Logement = () => {
    const {id} = useParams(); // Utiliser l'id de l'url pour obtenir le paramètre dynamique
    const [appart, setAppart] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const findAppart = () => {
            try {
                const foundAppart = logementsData.find(logement => logement.id === id); // Trouver l'appartement correspondant à l'id de l'url
                if (!foundAppart) {
                    navigate('/error'); // Rediriger vers la page d'erreur en cas d'erreur
                } else {
                setAppart(foundAppart);
                }
            } catch (error) {
                navigate('/error'); // Rediriger vers la page d'erreur en cas d'erreur
            }
        }    
        findAppart();
    }, [id, navigate]);

    if (!appart) {
        return null; // Retourner null si l'appartement n'est pas trouvé (la redirection aura lieu)
    }

    return (
        <section className="logement-container">
            <Carousel pictures={appart.pictures}/>
            <div className="appart">
                <div className="appart__content">
                    <div className="appart__content--details">
                        <h1>{ appart.title }</h1>
                        <p>{ appart.location }</p>
                        <div className="tags">
                            {appart.tags.map((tag, index) => (
                                <Tags key={index} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className ="appart__content--host" >
                        <Host hostName={appart.host.name} hostPicture={appart.host.picture} name={appart.title} />   
                        <Rating rating={appart.rating}/> 
                    </div>
                </div>
                <div className="appart__collapses">
                    <div className="appart__collapses--collapse">
                    <Collapse  title="Description" description={appart.description}/></div>
                    <div className="appart__collapses--collapse">
                        <Collapse className="appart__collapses--collapse" title="Équipements" description={
                            <ul>
                                {appart.equipments.map((equipment, index) =>
                                    <li key={index}>{equipment}</li>
                                )}
                            </ul>
                        }/>
                    </div>
                </div>
            </div>   
        </section>
);   
};

export default Logement;