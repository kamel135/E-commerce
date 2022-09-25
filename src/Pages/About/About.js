import React, { useEffect } from "react";
import "./About.css";


const About = ({ FooterHandler }) => {
  useEffect(() => {
    return FooterHandler(true);
  }, [FooterHandler]);

  return (
    <div className="About">
      <div className="container">
        <div className="About-wapper">
          <h3>About</h3>
          <p>
            A global online fashion and lifestyle retail company, committed to
            making the beauty of fashion accessible to all. We use on-demand
            manufacturing technology to connect suppliers to the supply chain,
            reducing inventory waste and enabling us to offer a diverse range of
            products at affordable prices to customers around the world. From
            our global offices, we reach clients in more than 150 countries.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
