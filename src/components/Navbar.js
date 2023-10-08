import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import LogoUnito from "../img/Logounito.svg";
import LogoDiviso from "../img/Logodiviso.svg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoTransition, setLogoTransition] = useState(false);
  const location = useLocation(); // Get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle between logoNero and logoBianco based on scroll position
  useEffect(() => {
    if (isScrolled) {
      setLogoTransition(false);
    } else {
      setLogoTransition(true);
    }
  }, [isScrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  // Function to close the menu
  return (
    <div
      className={isScrolled ? "navbar scrolled" : "navbar"}
      id={isMenuOpen ? "open" : "close"}
    >
      <div className="logo">
        <Link to="/">
          <img src={logoTransition ? LogoUnito : LogoDiviso} alt="" />
        </Link>
      </div>
      <div className="menu">
        <div className="toggleButton">
          <MenuIcon
            onClick={toggleMenu}
            className={isScrolled ? "blackIcon" : "whiteIcon"}
            style={{ position: "fixed", right: "20px", top: "20px" }}
          />
        </div>
        <div className="links">
          <Link to="/portfolio" className="link">
            {location.pathname === "/portfolio" ? (
              <h3>PORTFOLIO</h3>
            ) : (
              <p>PORTFOLIO</p>
            )}
          </Link>
          <Link to="/about" className="link">
            {location.pathname === "/about" ? <h3>ABOUT</h3> : <p>ABOUT</p>}
          </Link>
          <Link to="/contact" className="link">
            {location.pathname === "/contact" ? (
              <h3>CONTACT</h3>
            ) : (
              <p>CONTACT</p>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
