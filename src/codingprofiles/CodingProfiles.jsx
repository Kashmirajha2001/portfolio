import React, { useState, useEffect } from "react";
import "./codingprofiles.css";
import Slide from "./Slide";
import {datas} from "./data";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import gfg from "../assets/gfg.png"

const CodingProfiles = () => {
  const [data, setdata] = useState(datas);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="codingprofiles" className="codingprofiles">
      <div className="heading">
        <h1>Coding Profiles</h1>
      </div>
      <div className="codingContainer">
        <div className="codingSlides">
          {data.map((value, valueIndex) => {
            return (
              <Slide
                key={valueIndex}
                {...value}
                valueIndex={valueIndex}
                index={index}
              />
            );
          })}
        </div>
        <div className="codingButtons">
          <a className="" onClick={() => setIndex(index - 1)}>
            <ArrowBackIosNewIcon style={{width:"1rem", height:"1rem", position:"relative", top:"-8%", marginRight:"1rem"}}/>
          </a>
          <div className="dots">
            {Array.from({ length: 3 }).map((value, valueIndex) => (
              <div
                className={valueIndex === index ? "dot active" : "dot"}
                onClick={()=>setIndex(valueIndex)}
              ></div>
            ))}
          </div>
          <a className="" onClick={() => setIndex(index + 1)}>
            <ArrowForwardIosIcon style={{width:"1rem", height:"1rem", position:"relative", top:"-8%", marginLeft:"1rem"}}/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
