import "./loading.css";
import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { TypeAnimation } from "react-type-animation";
import StarfieldAnimation from "react-starfield-animation";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="loading">
      <StarfieldAnimation
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        numParticles={800}
        particleSpeed={0}
        dx={0.000000001}
        dy={0.000000001}
      />
      <div className="spinners">
        <CircleLoader color={"var(--color-primary)"} loading={loading} size={100} />
        <CircleLoader color={"var(--color-primary)"} loading={loading} size={100} />
        <CircleLoader color={"var(--color-primary)"} loading={loading} size={100} />
      </div>
      <TypeAnimation
        sequence={["Kashmira Jha", 1000]}
        className="intro"
        speed={10}
        style={{ fontSize: "2em" }}
      />
    </div>
  );
};

export default Loading;
