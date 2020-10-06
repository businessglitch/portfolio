import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";
import Navigation from "./navigation";

export const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  const handleState = (state) => {
    if (state === true) openMenu(dimensions);
    else closeMenu();
    setMenuState({ menuOpened: state });
  };
  useEffect(() => {
    const unlisten = history.listen(() => {
      closeMenu();
      setMenuState({ menuOpened: false });
    });
    return () => {
      unlisten();
    };
  }, [menuState.menuOpened]);
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center">
          <div className="logo-image">
            <img
              className="brand-logo"
              src={require(`../../assets/FH.png`)}
              alt=""
            />
          </div>
          <div className="logo-link">
            <NavLink to={process.env.PUBLIC_URL + "/"} exact>
              FAHAD HAYAT.
            </NavLink>
          </div>
          <div className="nav">
            {dimensions.width > 768 ? <Navigation /> : ""}
          </div>

          <div className="nav-toggle">
            <div onClick={() => handleState(true)} className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => handleState(false)}
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
