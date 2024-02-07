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
          <h1>Let's bring your ideas to life together</h1>
          <div className="portfolioLink">
            <Link to="/portfolio">VISIT MY PORTFOLIO</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
