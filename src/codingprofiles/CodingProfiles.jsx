import React from 'react';
import "./codingprofiles.css"
import gfg from "../assets/gfg.png";
import codingninjas from "../assets/codingninjas.svg";

const CodingProfiles = () => {
  return (
    <section id="codingprofiles" className="codingprofiles">
        {/* <h5 className="about_heading">Get To Know </h5> */}
        <h1>Coding Profiles</h1>
        <img src={gfg} alt="" />
    </section>
  )
}

export default CodingProfiles