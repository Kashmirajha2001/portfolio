import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";
import { motion } from "framer-motion";

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
      <form ref={form} className="form" onSubmit={sendEmail}>
        <h2> Contact</h2>
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
    </section>
  );
};

export default Contact;
