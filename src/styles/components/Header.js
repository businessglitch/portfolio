import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

export const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened === true) {
      // Run open menu animation
      openMenu(dimensions);
    } else {
      // Run close menu animation
      closeMenu();
    }
  }, [menuState.menuOpened]);
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to={process.env.PUBLIC_URL + "/"} exact>
              FAHAD HAYAT.
            </NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
