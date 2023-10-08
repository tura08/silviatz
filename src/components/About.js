import { useEffect } from "react";
import "./about.css";
import io from "../img/about/io.png";
import cv from "../assets/cv.pdf";

const About = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    window.open(cv, "_blank"); // Open the PDF in a new tab
  };

  return (
    <div className="a">
      <div className="a-wrapper">
        <div className="a-left">
          <img src={io} alt="" className="a-image" />
        </div>
        <div className="a-right">
          <h1>Nice to meet you!</h1>
          <p className="a-desc">
            I'm Silvia Turazza, an enthusiastic Italian Graphic Designer with a
            knack for branding and social media. My hands-on experience,
            combined with my love for design, keeps me motivated to consistently
            deliver eye-catching and impactful solutions.
            <br></br>
            <br></br>
            As a versatile freelancer, I've been lucky to work with various
            clients, which has enriched my creativity and allowed me to draw
            inspiration from different perspectives.
            <br></br>
            <br></br>
            Whether it's crafting a captivating brand identity or coming up with
            engaging social media campaigns, I thrive on the chance to push
            creative boundaries and bring your vision to life. I'm all set to be
            your creative partner, committed to turning your ideas into visual
            realities.
          </p>
          <button onClick={handleButtonClick}>VISIT MY CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
