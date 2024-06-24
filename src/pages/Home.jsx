import React from "react";
import Banner from '../components/Banner';
import Card from "../components/Card";
import imgBackground from '../images/image1.png';
import Logements from '../datas/logements.json';

const Home = () => {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" image={imgBackground} />
      <div className="cards">
        {Logements.map((logement) => (
          <Card logement={logement} key={logement.id}/>
        ))}
      </div>
    </div>
  );
};

export default Home;