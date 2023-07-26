import React from "react";
import CV from "../assets/Kashmira Jha_CSE.pdf";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <motion.div
      // animate={{ x: 100 }}
      className="cta"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default CTA;
