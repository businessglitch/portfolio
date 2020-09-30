import React from "react";
const projects = [
  {
    id: 1,
    github: "https://github.com/businessglitch/sample-portfolio-1/",
    demo: "https://businessglitch.github.io/sample-portfolio-1/",
    image: "../../assets/FH.png",
    title: "Showcase Website 1",
    description: "Sample portfolio website made using React abd Gsap",
  },
  {
    id: 2,
    github: "https://github.com/businessglitch/3Dice",
    demo: "",
    image: "../../assets/FH.png",
    title: "3Dice",
    description:
      "A fun project made to learn more about building fullstack SaaS applications",
  },
  {
    id: 3,
    github: "https://rooms-server.web.app/",
    demo: "https://github.com/businessglitch/Carleton-rooms",
    image: "../../assets/FH.png",
    title: "Rooms",
    description: "Room finding web-app for CarletonU classrooms",
  },
];

const Projects = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="projects-row">
          {projects.map((project) => (
            <div key={project.id} className="ui card">
              <div className="image">
                <img alt="" src={project.image} />
              </div>
              <div className="content">
                <h3>{project.title}</h3>
                <div className="description">{project.description}</div>
              </div>
              <div className="extra content">
                {project.demo !== "" ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.demo}
                    class="ui button primary"
                  >
                    Demo
                  </a>
                ) : (
                  ""
                )}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github}
                  class="ui secondary button"
                >
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
