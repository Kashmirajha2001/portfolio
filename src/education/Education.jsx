import "./education.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
// import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variantEd = {
    // visible: { opacity: 1, scale: 1 },
    // hidden: { opacity: 0, scale: 0.3 },
    hidden: { opacity: 0, y: 100 }, // Starts from left (-100px)
    visible: {
      opacity: 1,
      y: 0, // Moves to initial position (0px)
      transition: {
        duration: 1,
        type: "tween", // You can adjust the transition type as needed
      },
    },
  };

  const variantEdExperience = {
    hidden: { opacity: 0, y: 100 }, // Starts from right (100px)
    visible: {
      opacity: 1,
      y: 0, // Moves to initial position (0px)
      transition: {
        duration: 1,
        type: "tween", // You can adjust the transition type as needed
      },
    },
  };

  return (
    <section className="education">
      <h1>Qualification</h1>
      <div className="education_content">
        <div className="qualification_left">
          <h2>
            <SchoolIcon className="education_icon" /> Education
          </h2>
          <div
            className="education_contents"
          >
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
          </div>
        </div>
        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variantEdExperience}
            exit="hidden"
            // transition={{ duration: 1 }}
            ref={ref}
            className="qualification_right">
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
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
