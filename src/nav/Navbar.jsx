import "./navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SchoolIcon from "@mui/icons-material/School";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      let isSectionVisible = false;

      sections.forEach((section) => {
        const top = section.offsetTop - 50;
        const height = section.offsetHeight;
        const sectionTop = top - scrollPosition;
        const sectionBottom = sectionTop + height;

        if (
          sectionTop < windowHeight * 0.6 &&
          sectionBottom > windowHeight * 0.4
        ) {
          setActiveNav(`#${section.id}`);
          isSectionVisible = true;
        }
      });

      if (scrollPosition === 0) {
        setActiveNav("#");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <div className="navBar">
      <ul className="navigation">
        <li
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <a href="#">
            <span className="icon">
              <HomeOutlinedIcon />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <a href="#about">
            <span className="icon">
              <Person2OutlinedIcon />
            </span>
            <span className="text">About</span>
          </a>
        </li>
        <li
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <a href="#skills">
            <span className="icon">
              <SchoolIcon />
            </span>
            <span className="text">Skills</span>
          </a>
        </li>
        <li
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <a href="#projects">
            <span className="icon">
              <AccountTreeOutlinedIcon />
            </span>
            <span className="text">Projects</span>
          </a>
        </li>
        <li
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <a href="#contact">
            <span className="icon">
              <ContactPageOutlinedIcon />
            </span>
            <span className="text">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
