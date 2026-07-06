import "./Projects.css";
import amazonImg from "../../assets/images/work-3.png";
import musicImg from "../../assets/images/work-2.png";
import socialImg from "../../assets/images/work-1.png";

export default function Projects() {
  const projects = [
    {
      title: "Social Media App",
      image: socialImg,
      description: "A platform connecting multi-talented developers.",
      github: "https://github.com/",
      demo: "https://www.x.com"
    },
    {
      title: "Music App",
      image: musicImg,
      description: "Music streaming and management interface.",
      github: "https://github.com/",
      demo: "https://www.spotify.com"
    },
    {
      title: "E-Commerce App",
      image: amazonImg,
      description: "Online shopping platform built with React.",
      github: "https://github.com/",
      demo: "https://www.amazon.com"
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}