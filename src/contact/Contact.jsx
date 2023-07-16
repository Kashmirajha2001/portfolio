import "./contact.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmnqlde', 'template_96wo5pv', form.current, '7Of6f8TmQj78POLaD')
    e.target.reset()
  };

  return (
    <section id="contact" className="contact">
      <form className="form" ref={form} onSubmit={sendEmail}>
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
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
