import React from "react";
import ReactTypingEffect from "react-typing-effect";

export const Banner = ({ dimensions }) => {
  let texts = [
    "indoors qurantining",
    "handling client work",
    "writing code",
    "at the gym",
    "bumping to Drake, Lil Baby and Pop Smoke",
    "working on a Youtube video",
  ];
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <img
            src={require(`../../assets/fahad_hayat.jpg`)}
            alt="Fahad Hayat"
          />
          <h2>
            <div className="line">
              <span>Hi,</span>
            </div>
            <div className="line">
              <span>I'm Fahad</span>
            </div>
          </h2>
          <div className="icons-row">
            <hr className="intro-divider" />
            <div className="type-row">
              <h3>
                /* I'm likely{" "}
                <ReactTypingEffect
                  text={texts}
                  speed={85}
                  eraseDelay={500}
                  typingDelay={500}
                  cursor="_"
                />{" "}
                */
              </h3>
              <ul className="icons-list">
                <li className="icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/fahdhayat/"
                  >
                    <i className="linkedin alternate icon"></i>
                  </a>
                </li>
                <li className="icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/fahdhayat/"
                  >
                    <i className="instagram icon"></i>
                  </a>
                </li>
                <li className="icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@fahoodihay"
                  >
                    <i className="medium icon"></i>
                  </a>
                </li>
                <li className="icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/businessglitch"
                  >
                    <i className="github icon"></i>
                  </a>
                </li>
                <li className="icon">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.youtube.com/channel/UC8Bx9PytdSy9Xz_Yp3Lim0A/"
                  >
                    <i className="youtube alternate icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
