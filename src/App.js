import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./styles/components/Header";
import Navigation from "./styles/components/navigation";
import Footer from "./styles/components/Footer";

//  Pages
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Home from "./pages/home";
import Projects from "./pages/projects";

// Routes
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/blogs", name: "Blogs", Component: Blogs },
  { path: "/projects", name: "Projects", Component: Projects },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  // Prevent flashing
  gsap.to("body", 0, { css: { visibility: "visible" } });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Handle window resizing

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [dimensions]);

  return (
    <>
      <div className="App">
        <Header dimensions={dimensions} />

        {routes.map(({ path, Component }) => {
          return (
            <Route key={path} exact path={process.env.PUBLIC_URL + path}>
              <Component dimensions={dimensions} />
            </Route>
          );
        })}
       
      </div>
      {dimensions.width <= 768 ? <Navigation /> : ""}
      <Footer />
    </>
  );
}
export default App;
