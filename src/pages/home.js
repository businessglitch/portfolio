import React, { useEffect, useState } from "react";
import gsap from "gsap";
import IntroOverlay from "../styles/components/IntroOverlay";
import Banner from "../styles/components/Banner";
import Cases from "../styles/components/Cases";

const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".line span", 1.8, {
    ease: "power4.out",
    y: 100,
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.7,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", 0, { css: { display: "none" } })
    .from(".case-image img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    //timeline
    // let vh = dimensions.height * 0.01;
    // document.documentElement.style.setProperty("--vh", `${vh}px`);
    homeAnimation(completeAnimation);
  }, [dimensions.width]);
  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}

      <Banner />
      <Cases />
    </>
  );
};

export default Home;
