import React from "react";
import me from "../assets/about_img.jpg";
import "./about.css";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Popup from "reactjs-popup";

const About = () => {
  return (
    <section id="about" className="about">
      <h5 className="about_heading">Get To Know </h5>
      <h1>About Me</h1>
      <div className="about_me">
        <div className="about_me_img">
          <div className="my-img">
            <img src={me} alt="About img" />
          </div>
        </div>

        <div className="about_content">
          <p>
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
          <div className="about_cards">
            <Popup
              trigger={
                <div className="about_card">
                  <div className="about_icon">
                    <EmojiEventsIcon />
                  </div>
                  <h3>Achievements</h3>
                  <small>Read More</small>
                </div>
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
            <a className="about_card" href="#skills">
              <div className="about_icon">
                <SchoolIcon />
              </div>
              <h3>Skills</h3>
              <small>Read More</small>
            </a>
            <a className="about_card" href="#projects">
              <div className="about_icon">
                <AccountTreeIcon />
              </div>
              <h3>Projects</h3>
              <small>Read More</small>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
