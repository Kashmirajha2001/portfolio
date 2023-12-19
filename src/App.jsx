import "./app.css";
import Intro from "./intro/Intro";
import Contact from "./contact/Contact";
import Navbar from "./nav/Navbar";
import Mode from "./mode/Mode";
import Projects from "./projects/Projects";
import About from "./about/About";
import React, { useState, useEffect } from "react";
import Loading from "./loading/Loading";
import Skills from "./Skills/Skills";
import Education from "./education/Education";

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
          <Intro />
          <About />
          <Education/>
          <Skills/>
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
