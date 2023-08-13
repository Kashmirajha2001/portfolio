import React from "react";
import "./projects.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import img1 from "../assets/proj1.jpg";
import img2 from "../assets/proj2.jpg";

const content = [
  {
    title: "ToDo List",
    description:
      "Combining PHP backend, HTML/CSS/JS/Bootstrap frontend. Implement secure login mechanism, intuitive task organization, and sleek design to enhance user productivity and satisfaction.",
    image: img1,
    demo: "http://todolist-by-kashmira.infinityfreeapp.com",
    github: "https://github.com/Kashmirajha2001/todolist",
  },
  {
    title: "Art Page",
    description:
      "A visually stunning art page showcasing artwork,built with HTML, CSS, JS, and Boostrap for a responsive and interactive user experience.",
    image: img2,
    demo: "https://kashmirajha2001.github.io/artsbykash",
    github: "https://github.com/Kashmirajha2001/artsbykash",
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Project Showcase</h1>
      <p>Highlighting My Creative Endeavors</p>
      <div className="box">
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <span></span>
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="proj_btn">
                  <a href={item.demo} className="btn">
                    View Demo
                  </a>
                  <a href={item.github} className="btn btn-primary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
