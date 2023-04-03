import React from "react";
import EngineStrength from "../components/EngineStrength";
import Demo from "../components/Demo";
import Intro from "../components/Intro";

const Stock = () => {
  return (
    <div className="container">
      <Intro />
      <Demo />
      <EngineStrength />
    </div>
  );
};

export default Stock;
