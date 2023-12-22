import "./app.css";
import Intro from "./intro/Intro";
import Contact from "./contact/Contact";
import Navbar from "./nav/Navbar";
import Mode from "./mode/Mode";
import Theme from "./theme/Theme";
import Projects from "./projects/Projects";
import CodingProfiles from "./codingprofiles/CodingProfiles";
import About from "./about/About";
import React, { useState, useEffect } from "react";
import Loading from "./loading/Loading";
import Skills from "./Skills/Skills";
import Education from "./education/Education";
import Footer from "./footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
        <div>
          <Navbar />
          <Mode />
          <Theme/>
          <Intro />
          <About />
          <Education/>
          <Skills/>
          <Projects />
          <CodingProfiles/>
          <Contact />
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;
