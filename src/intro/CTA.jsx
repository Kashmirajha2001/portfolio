import React from "react";
import CV from "../assets/Kashmira Jha_CSE.pdf";
import { motion } from "framer-motion";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

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
        <DownloadForOfflineIcon className="CTA_icon"/>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
        <ArrowCircleRightIcon className="CTA_icon"/>
      </a>
    </motion.div>
  );
};

export default CTA;
