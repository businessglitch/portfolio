import React from "react";
import { NavLink } from "react-router-dom";
import Pdf from "../../assets/fahadhayat.pdf";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-columns">
        <div className="nav-column">
          <ul className="nav-links">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/"} exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/projects"} exact>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/blogs"} exact>
                Blogs
              </NavLink>
            </li>
            <li>
              <a href={Pdf} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
