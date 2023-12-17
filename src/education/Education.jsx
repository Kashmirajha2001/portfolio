import "./education.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variantEd = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.3 },
  };

  return (
    <section className="education">
      <h1>Qualification</h1>
      <div className="education_content">
        <div className="qualification_left">
          <h2>Education</h2>
          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={variantEd}
            exit="hidden"
            transition={{ duration: 2 }}
            ref={ref}
            className="contents"
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
          </motion.div>
        </div>
        <div className="qualification_right">
          <h2>Experience</h2>
        </div>
      </div>
    </section>
  );
};

export default Education;
