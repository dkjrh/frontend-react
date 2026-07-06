import { useState } from "react";
import "./About.css";
import wallpaper from "../../assets/images/wallpaper.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-image">
          <img src={wallpaper} alt="Profile" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>About Me</h2>

          <p className="intro-text">
            I am a Full Stack Developer skilled in React, Django, Python, and database systems.
            I enjoy building scalable applications and solving real-world problems through code.
          </p>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={activeTab === "skills" ? "active" : ""}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>

            <button
              className={activeTab === "experience" ? "active" : ""}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>

            <button
              className={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>

            <button
              className={activeTab === "github" ? "active" : ""}
              onClick={() => setActiveTab("github")}
            >
              GitHub
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "skills" && (
              <ul>
                <li>React</li>
                <li>Django</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>MongoDB</li>
              </ul>
            )}

            {activeTab === "experience" && (
              <ul>
                <li>Stratcom Communications (2023)</li>
                <li>Full Stack Developer Projects</li>
              </ul>
            )}

            {activeTab === "education" && (
              <ul>
                <li>Makerere University (2020–2025)</li>
                <li>ST Peters SSS Nsambya</li>
                <li>Namilyango College</li>
              </ul>
            )}

            {activeTab === "github" && (
              <a
                href="https://www.github.com/wizzy58"
                target="_blank"
                rel="noreferrer"
              >
                Visit My GitHub Profile
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}