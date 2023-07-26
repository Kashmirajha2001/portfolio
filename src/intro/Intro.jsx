import React from "react";
import "./intro.css";
import Social from "./Social";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import CTA from "./CTA";
import Image from "./Image";
import { motion } from "framer-motion";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Student", "Web Developer", "UI designer", "Sketch Artist"],
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
      <motion.div
        initial={{x:-500}}
        animate={{x:0}}
        transition={{duration:1.5}}
       className="intro_left"
       >
        <h1 href="#">
          <span>Kashmira Jha</span>_
        </h1>
        <h2>Hi there, It's me</h2>
        <h1 className="header">Kashmira</h1>
        <h3>
          a <span ref={textRef}> </span>
        </h3>
        <CTA />
        <Social /> 
      </motion.div>

      <div className="intro_right">
        <Image />
      </div>
    </section>
  );
};

export default Intro;
