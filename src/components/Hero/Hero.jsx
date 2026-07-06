import "./Hero.css"
import profile from "../../assets/images/profile.jpg"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import cv from "../../assets/cv/CV.pdf"
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Text Section */}
        <div className="hero-text">
          <p className="intro">Hello, I'm</p>

          <h1 className="name">
            Emmanuel <span>Okanya</span>
          </h1>

          <h3 className="role">
            Full Stack Developer (React & Django)
          </h3>

          <p className="description">
            I build responsive web applications, REST APIs, and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Hire Me
            </a>

            <a
              href={cv}
              className="btn secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="socials">
            <a href="https://www.github.com/wizzy58" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="mailto:okanyaemmanuel6@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hero-image">
          <img src={profile} alt="Emmanuel Okanya" />
        </div>

      </div>
    </section>
  );
}