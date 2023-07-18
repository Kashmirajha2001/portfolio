import React from "react";
import "./intro.css";
import Social from "./Social";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import CTA from "./CTA";
import Image from "./Image";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Student", "Web Developer", "Sketch Artist"],
      showCursor: true,
      backDelay: 1000,
      backSpeed: 40,
      loop: true,
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="#" className="intro_page">
      <div className="intro_left">
        <h1 href="#">
          <span>Kashmira Jha</span>_
        </h1>
        <h2>Hi there, It's me</h2>
        <h1 className="header">Kashmira</h1>
        <h3>
          And I am a <span ref={textRef}> </span>
        </h3>
        <CTA />
        <Social /> 
      </div>

      <div className="intro_right">
        <Image />
      </div>
      {/* <h1 href="#" className="heading">
        <span>Kashmira Jha</span>_
      </h1>
      <div className="intro_content">
        <h2>Hi there, It's me</h2>
        <h1>Kashmira</h1>
        <h3>
          And I am a <span ref={textRef}> </span>
        </h3>
      </div>
      <CTA />
      <Image />
      <Social /> */}
    </section>
  );
};

export default Intro;
