import React from "react";
import me from "../assets/about_img.jpg";
import "./about.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Popup from "reactjs-popup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Fade, Zoom } from "react-awesome-reveal";

const About = () => {

  const [refcard, inViewCard] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section id="about" className="about">
      <h5 className="about_heading">Get To Know </h5>
      <h1>About Me</h1>
      <div className="about_me">
        <Fade direction="up" triggerOnce={false}>
          <div className="about_me_img">
            <div className="my-img">
              <img src={me} alt="About img" />
            </div>
          </div>
        </Fade>
        <div className="about_content">
          <Zoom triggerOnce={false}>
          <p
          >
            Hello there! I am a Computer Science Engineering (CSE) student with
            a passion for frontend development. I specialize in using HTML, CSS,
            Bootstrap, React, and JavaScript to create interactive, responsive
            and user-friendly web applications. Additionally, I have knowledge
            in UI designing using Figma, which allows me to create visually
            appealing and intuitive user interfaces. In terms of programming
            languages, I am proficient in C++, Java, and Python. I am always
            eager to learn new technologies and stay up-to-date with the latest
            trends in the industry.
          </p>
          </Zoom>
          <div className="about_cards">
            <Popup
              trigger={
                <motion.div
                  ref={refcard}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: inViewCard ? 360 : 0 }}
                  transition={{ duration: 1 }}
                  className="about_card"
                >
                  <div className="about_icon">
                    <EmojiEventsIcon />
                  </div>
                  <h3>Achievements</h3>
                  <small>Read More</small>
                </motion.div>
              }
              modal
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="modal_header">
                    Achievements and Coding profiles
                  </div>
                  <div className="modal_content">
                    <ul>
                      <li>
                        <span>IEEE - EDKON Kolkata Conference </span>VLSI and
                        AES based IOT security by Modified Random S-Box
                        Generation.
                      </li>
                      <li>
                        <span>GeeksForGeeks: </span>Solved over 270+ questions
                      </li>
                      <li>
                        <span>Coding Nijas: </span>Solved over 200+ questions
                        <p>Expert at Coding Ninjas</p>
                      </li>
                      <li>
                        Under top <span>Geeks</span> in college's Geeks For
                        Geeks portal out of 1300 registered Geeks-June'2023.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </Popup>

            <motion.a
              ref={refcard}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: inViewCard ? 360 : 0 }}
              transition={{ duration: 1 }} className="about_card" href="#skills">
              <div className="about_icon">
                <SchoolIcon />
              </div>
              <h3>Skills</h3>
              <small>Read More</small>
            </motion.a>

            <motion.a
              ref={refcard}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: inViewCard ? 360 : 0 }}
              transition={{ duration: 1 }}
              className="about_card"
              href="#projects"
            >
              <div className="about_icon">
                <AccountTreeIcon />
              </div>
              <h3>Projects</h3>
              <small>Read More</small>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
