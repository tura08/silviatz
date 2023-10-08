import React, { useEffect } from "react";
import projects from "../data.js";
import { Link } from "react-router-dom";
import "./portfolio.css"; // Import the CSS file

const Portfolio = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ul className="project-list">
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <Link to={`/portfolio/${project.id}`}>
              <img src={project.image.imagePortfolio} alt={project.name} />
            </Link>
            <h2>{project.info.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
