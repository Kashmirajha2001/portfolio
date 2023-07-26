import me from "../assets/me.png";
import { motion } from "framer-motion";

const Image = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img src={me} className="image" />
    </motion.div>
  );
};

export default Image;
