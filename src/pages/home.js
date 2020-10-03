import React, { useEffect, useState } from "react";
import gsap from "gsap";
import IntroOverlay from "../styles/components/IntroOverlay";
import Banner from "../styles/components/Banner";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from([".line span", ".icons-row"], 1.8, {
    ease: "power4.out",
    y: 150,
    delay: 0.4,
    opacity: 0,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.4, {
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } });
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    //timeline
    homeAnimation(completeAnimation);
  }, [dimensions.width]);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner dimensions={dimensions} />
    </>
  );
};

export default Home;
