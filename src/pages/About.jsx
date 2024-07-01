import React from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import imgBackground from "../images/image2.png";
import collapsesDatas from "../datas/aboutCollapse.json"

const About = () => {
  return (
    <div>
      <Banner image ={imgBackground}/>
      <div className="collapses">
        {collapsesDatas.map((collapse) => (
          <Collapse key={collapse.id} title={collapse.title} description={collapse.content}/>
        ))}
      </div>
    </div>
  );
};

export default About;