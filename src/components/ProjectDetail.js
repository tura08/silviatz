// ProjectDetail.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data.js";
import "./projectDetail.css"; // Import the CSS file

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="p">
      <h2>{project.info.title}</h2>
      <div className="p-desc">
        <div className="p-desc-info">
          <div className="p-desc-details">
            <ul>
              {project.info.details.map((paragraph, index) => (
                <li key={index}>
                  <p>{paragraph}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-desc-links">
            {project.info.linkImage.map((icon, index) => (
              <a
                key={index}
                href={project.info.pageLink[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon} alt={`Icon ${index + 1}`} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div>
            <ul>
              {project.image.imageSingle.map((imageSrc, index) => (
                <li className="p-imageSingle-item" key={index}>
                  <img src={imageSrc} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <ul className="p-image3row">
            {project.image.image3row.map((imageSrc, index) => (
              <li className="p-image3row-items" key={index}>
                <img src={imageSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {project.info.details2.map((paragraph, index) => (
              <li key={index}>
                <p>{paragraph}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="p-image2row">
            {project.image.image2row.map((imageSrc, index) => (
              <li className="p-image2row-items" key={index}>
                <img src={imageSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="p-image4row">
            {project.image.image4row.map((imageSrc, index) => (
              <li className="p-image4row-items" key={index}>
                <img src={imageSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="p-image2row">
            {project.image.image2row2.map((imageSrc, index) => (
              <li className="p-image2row-items" key={index}>
                <img src={imageSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="p-image3row">
            {project.image.image3row2.map((imageSrc, index) => (
              <li className="p-image3row-items" key={index}>
                <img src={imageSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {project.image.imageSingle2.map((imageSrc, index) => (
              <li className="p-imageSingle-item" key={index}>
                <img src={imageSrc} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
