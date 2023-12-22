import React, { useState, useEffect } from "react";
import "./codingprofiles.css";
import Slide from "./Slide";
import datas from "./data";

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
        <h3>Coding Profiles</h3>
      </div>
    </section>
  );
};

export default CodingProfiles;