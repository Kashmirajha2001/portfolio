import "./skills.css";
import JavaScript from "../assets/js.png";
import HTML from "../assets/html-5.png";
import CSS from "../assets/css-3.png";
import REact from "../assets/react.gif";
import BootStrap from "../assets/bootstrap.png";
import C from "../assets/c-.png";
import Java from "../assets/java.png";
import Python from "../assets/python.png";
import Git from "../assets/github.png";
import VS from "../assets/vs.png";
import Figma from "../assets/figma.png";
// import Node from "../assets/nodejs.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 className="heading">Skills</h1>
      <div className="circles">
        <div className="circle_componets">
          <h3 className="title">Web developement</h3>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity }}
            className="skills_container"
          >
          {/* <div className="skills_container"> */}
            <div className="mainCircle">
              <div className="secCircle">
                <img src={JavaScript} alt="" />
              </div>
              <div className="secCircle">
                <img src={CSS} alt="" />
              </div>
              <div className="secCircle">
                <img src={HTML} alt="" />
              </div>
              <div className="secCircle">
                <img src={REact} alt="" />
              </div>
              <div className="secCircle">
                <img src={BootStrap} alt="" />
              </div>
              {/* <div className="secCircle">
              <img src={Node} alt="" />
            </div> */}
            </div>
            <div className="backCircle blueCircle"></div>
            <div className="backCircle yellowCircle"></div>
          </motion.div>
            {/* </div> */}
        </div>

        <div className="circle_componets">
          <h3 className="title">Languages</h3>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity }}
            className="skills_container"
          >
          {/* <div className="skills_container"> */}
            <div className="mainCircle">
              <div className="secCircle">
                <img src={C} alt="" />
              </div>
              <div className="secCircle">
                <img src={Java} alt="" />
              </div>
              <div className="secCircle">
                <img src={Python} alt="" />
              </div>
            </div>

            <div className="backCircle blueCircle"></div>
            <div className="backCircle yellowCircle"></div>
          </motion.div>
          {/* </div> */}
        </div>

        <div className="circle_componets">
          <h3 className="title">Tools</h3>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity }}
            className="skills_container"
          >
          {/* <div className="skills_container"> */}
            <div className="mainCircle">
              <div className="secCircle">
                <img src={Git} alt="" />
              </div>
              <div className="secCircle">
                <img src={VS} alt="" />
              </div>
              <div className="secCircle">
                <img src={Figma} alt="" />
              </div>
            </div>

            <div className="backCircle blueCircle"></div>
            <div className="backCircle yellowCircle"></div>
          </motion.div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
