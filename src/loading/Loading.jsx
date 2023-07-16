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
        <CircleLoader color={"#81c7fa"} loading={loading} size={100} />
        <CircleLoader color={"#81c7fa"} loading={loading} size={100} />
        <CircleLoader color={"#81c7fa"} loading={loading} size={100} />
      </div>
      <TypeAnimation
        sequence={["Kashmira Jha", 1000]}
        className="intro"
        speed={10}
        style={{ fontSize: "2em" }}
      />
    </div>
    // <section className="load">
    //   <div className="loader">
    //     <span style="--i:1;"></span>
    //     <span style="--i:2;"></span>
    //     <span style="--i:3;"></span>
    //     <span style="--i:4;"></span>
    //     <span style="--i:5;"></span>
    //     <span style="--i:6;"></span>
    //     <span style="--i:7;"></span>
    //     <span style="--i:8;"></span>
    //     <span style="--i:9;"></span>
    //     <span style="--i:10;"></span>
    //     <span style="--i:11;"></span>
    //     <span style="--i:12;"></span>
    //     <span style="--i:13;"></span>
    //     <span style="--i:14;"></span>
    //     <span style="--i:15;"></span>
    //     <span style="--i:16;"></span>
    //     <span style="--i:17;"></span>
    //     <span style="--i:18;"></span>
    //     <span style="--i:19;"></span>
    //     <span style="--i:20;"></span>
    //   </div>
    // </section>
  );
};

export default Loading;
