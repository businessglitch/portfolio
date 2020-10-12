import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      github: "https://github.com/businessglitch/sample-portfolio-1/",
      demo: "https://businessglitch.github.io/sample-portfolio-1/",
      image: "showcase1.png",
      title: "Showcase website #1",
      description: "Sample portfolio website made using React and Gsap",
    },
    {
      id: 2,
      github: "https://github.com/businessglitch/3Dice",
      demo: "",
      image: "3dice.png",
      title: "3Dice",
      description:
        "A fun project made to learn more about building fullstack SaaS applications",
    },
    {
      id: 3,
      github: "https://rooms-server.web.app/",
      demo: "https://github.com/businessglitch/Carleton-rooms",
      image: "rooms.png",
      title: "Rooms",
      description: "Room finding web-app for CarletonU classrooms",
    },
  ];
  return (
    <div className="page">
      <div className="container">
        <div className="projects-row">
          {projects.map((project) => (
            <div key={project.id} className="ui card">
              <div className="image">
                <img
                  alt=""
                  src={require(`../assets/projects/${project.image}`)}
                />
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
                    className="ui button primary"
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
                  className="ui secondary button"
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
