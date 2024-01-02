import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
// import home from "../img/home.png";

function Home() {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h">
      <div className="h-wrapper">
        <div className="h-left">
          <p>Hi! I'm Silvia Turazza, I am a</p>
          <h1>Graphic Designer</h1>
          <div className="portfolioLink">
            <Link to="/portfolio">VISIT MY PORTFOLIO</Link>
          </div>
        </div>
        <div className="h-right">
          {/* <img src={home} alt="" className="h-image"></img> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
