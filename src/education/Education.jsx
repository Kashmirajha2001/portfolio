import "./education.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import img from "../assets/education.png";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <section className="education">
      <h1>Qualification</h1>
      <div className="education_content">
        <div className="qualification_left">
          <h2>
            <SchoolIcon className="education_icon" /> Education
          </h2>
          <div className="education_contents">
          <Fade direction="left" triggerOnce={false} cascade={false} duration={2000}>
            <div className="content_box">
              <h3>2020-2024</h3>
              <h2>Bachelor of Technology(B.Tech)</h2>
              <p>Computer Science & Engineering</p>
              <p>
                <span>CGPA: </span>9.48
              </p>
              <p>Meghnad Saha Institute of Technology</p>
            </div>
            <div className="content_box">
              <h3>2018-2020</h3>
              <h2>Higher Secondary Education</h2>
              <p>
                <span>Percentage: </span>88%
              </p>
              <p>
                West Bengal Council of Higher Secondary Education, Sarsuna High
                School, Kolkata
              </p>
            </div>
            <div className="content_box">
              <h3>May 2018</h3>
              <h2>Secondary Education</h2>
              <p>
                <span>Percentage: </span>88.14%
              </p>
              <p>
                West Bengal Board of Secondary Education, Barisha Girls' High
                School, Kolkata
              </p>
            </div>
          </Fade>
          </div>
        </div>
        <Fade direction="up" triggerOnce={false}>
          <div className="qualification_right">
            <h2>
              <WorkHistoryIcon className="education_icon" /> Experience
            </h2>
            <div className="experience_info">
              <div>
                <h3>Fresher</h3>
              </div>
              <div>
                <h3>Projects</h3>
                <p>5+</p>
              </div>
            </div>
            <div className="education_img">
              <img src={img} alt="" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Education;
