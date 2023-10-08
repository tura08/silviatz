import React from "react";
import "./footer.css";
import facebook from "../img/icons/facebookFoot.svg";
import instagram from "../img/icons/instagramFoot.svg";
import tiktok from "../img/icons/tiktokFoot.svg";
import linkedin from "../img/icons/linkedinFoot.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icon">
        <a
          href="https://www.instagram.com/trzslv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram"></img>
        </a>
        <a
          href="https://it-it.facebook.com/silvia.turazza1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook"></img>
        </a>
        <a
          href="https://www.tiktok.com/@trzslv?_t=8gJVdU8gmJM&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tiktok} alt="tiktok"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/silvia-turazza-80a57b240/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin"></img>
        </a>
      </div>
      <p>silviaturazzagd@gmail.com</p>
      <p>+39 348 3286636</p>
      <br></br>
      <p>Online dal 2022</p>
    </div>
  );
};

export default Footer;
