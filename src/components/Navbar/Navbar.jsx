import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import cv from "../../assets/cv/CV.pdf"
import "./Navbar.css"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="logo">
         Okanya Emmanuel<span>.</span>
        </a>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          <li>
            <a
              href={cv}
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}