import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import EmailIcon from "@mui/icons-material/Email";
import img from "../assets/contact.png";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [flag, setFlag] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    setFlag(true);
    e.preventDefault();

    emailjs.sendForm(
      "service_lmnqlde",
      "template_96wo5pv",
      form.current,
      "7Of6f8TmQj78POLaD"
    );
    e.target.reset();
  };

  const handleClose = () => {
    setFlag(false);
  };
  setTimeout(handleClose, 5000);

  return (
    <section id="contact" className="contact">
      <h2> Contact</h2>
      <p>Let's get connected</p>
      <div className="contact_content">
        <div className="contact_left">
          <div className="contact_img">
            <img src={img} alt="" />
          </div>
          <Fade direction="left" duration={2000} triggerOnce={true}>
            <div className="contact_text">
              <h2>Get In Touch!</h2>
              <p>
                Feel free to get in touch with me. I am always open to
                discussing projects, creative ideas to be part of your visins.
              </p>
            </div>
          </Fade>
          <Fade direction="left" duration={2000} triggerOnce={true}>
            <div className="contact_modes">
              <div>
                <h3>
                  <EmailIcon className="contact_icon" /> Email
                </h3>
                <p>kashmirajha2001@gmail.com</p>
              </div>
              <div>
                <h3>
                  <LinkedInIcon className="contact_icon" /> LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/kashmira-jha-52405022b"
                  target="_blank"
                  className="btn-"
                >
                  Connect <ArrowCircleRightIcon className="contact_icon" />
                </a>
              </div>
              <div>
                <h3>
                  <InstagramIcon className="contact_icon" /> Instagram
                </h3>
                <a
                  href="https://instagram.com/artsbykash?igshid=MzNlNGNkZWQ4Mg=="
                  className="btn-"
                  style={{ marginBottom: "20px" }}
                >
                  Connect <ArrowCircleRightIcon className="contact_icon" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce={true}>
          <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="firstname" required="required" />
                  <span className="text">First Name</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="lastname" required="required" />
                  <span className="text">Last Name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="email" required="required" />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="mobile" required="required" />
                  <span className="text">Mobile</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox textarea">
                  <textarea required="required" name="msg" />
                  <span className="text">Type Your Message here...</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
            {flag ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  style={{
                    width: "fit-content",
                    position: "absolute",
                    bottom: "1rem",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  Thank You!
                </Alert>
              </motion.div>
            ) : (
              ""
            )}
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
