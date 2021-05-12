import React, { useEffect } from "react";
import "./hero1.styles.css";

import { gsap } from "gsap";

function Hero1() {
  // const tl = gsap.timeline({ delay: 2, repeat: -1 });
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(".h__drop", {
      duration: 0.2,
      width: "15vh",
      opacity: 1,
      ease: "elastic.out(2,0.5)",
    });
    tl.to(".h__drop", {
      duration: 0.1,
      width: "2.5vh",
      left: "15vh",
      ease: "elastic.out(1,0.1)",
    });
    tl.to(".i__drop", { opacity: 1, duration: 0.1 }, "-=0.1");
    tl.to(".h__drop", {
      duration: 0.1,
      height: "33vh",
      ease: "elastic.out(1,0.1)",
    });
    tl.to(".i__drop", {
      duartion: 0.2,
      y: "37vh",
      ease: "bounce.out",
    });
    tl.to(
      ".h__drop",
      {
        duration: 0.05,
        height: "10vh",
        top: "29vh",
        ease: "bounce.out",
      },
      "-=0.3"
    );
    tl.to(
      ".i__drop",
      {
        duartion: 0.2,
        y: "37vh",
        ease: "bounce.out",
      },
      "-=0.1"
    );
    tl.to(".h__drop", { duration: 0.1, width: "5vh" }, "-=0.1");
    tl.to(
      ".i__drop",
      {
        duration: 0.1,
        y: "29vh",
        ease: "bounce.out",
      },
      "-=0.1"
    );

    tl.to(
      ".i__letter",
      {
        duration: 0.1,
        bottom: "0.4vh",
        ease: "elastic.out(2,0.1)",
      },
      "-=0.1"
    );
    tl.to(
      ".h__letter",
      {
        duration: 0.05,
        opacity: 1,
        scale: 1.1,
        ease: "elastic.out(1,0.1)",
      },
      "-=0.1"
    );
    tl.to(".h__drop", { opacity: 0 }, "-=0.1");
    tl.to(".i__drop", { backgroundColor: "white" });

    tl.to(".i__letter", { delay: 2, bottom: "-15vh", duration: 0.2 }, "-=0.1");
    tl.to(".i__drop", {
      duration: 0.2,
      y: "37vh",
      ease: "elastic.out(2,0.2)",
    });
    tl.to(".h__letter", { duration: 0.1, opacity: 0 });
    tl.to(
      ".i__dev",
      {
        duration: 0.4,
        opacity: 1,
        bottom: 0,
        ease: "elastic.out(1.5,0.2)",
      },
      "-=0.1"
    );
    tl.to(".paravan__box", { duration: 0.01, width: "15vh", height: "12vh" });
    tl.to(".m__dev", { opacity: 1 });
    tl.to(".i__drop", {
      duration: 0.3,
      borderRadius: "0.9vh",
      width: "26vh",
      ease: "elastic.out(1,1)",
    });
    tl.to(".i__drop", {
      duration: 0.2,
      width: "1.3vh",
      borderRadius: "50%",
      left: "55vh",
    });
    tl.to(
      ".m__dev",
      { duration: 0.3, left: "19vh", ease: "back.out(2)" },
      "-=0.2"
    );
    tl.to(".paravan__box", { width: 0 });
    tl.to(
      ".a__dev",
      { opacity: 1, duration: 0.3, rotate: 360, ease: "elastic.out(2,0.2)" },
      "-=0.1"
    );
    tl.to(".web__dev", { duration: 0.3, left: "49vh" }, "-=0.2");
    tl.to(".web__dev", {
      duration: 1,
      color: "rgba(255,255,255,1)",
      // color: "rgb(231, 22, 22)",
      // ease: 'rough({template : elaastic.out , strength:1, points: 20, taper:"none" , randomize: true, clamp:false})',
    });
    tl.to(".web__dev", {
      duration: 0.4,
      fontStyle: "normal",
      ease: "elastic.out(2,0.3)",
    });
  }, []);

  return (
    <div className="hero__container">
      <div className="hello__div">
        <div className="h__letter">H</div>
        <div className="h__drop"></div>
        <div className="i__drop"></div>
        <div className="i__letter"></div>
        <div className="i__dev">I</div>
        <div className="m__dev">'m</div>
        <div className="paravan__box"></div>
        <div className="a__dev">a</div>
        {/* <div className="web__box"></div> */}
        <div className="web__dev">web</div>
      </div>
      <div className="message__div"></div>
    </div>
  );
}

export default Hero1;
