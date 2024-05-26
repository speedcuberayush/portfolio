import React from "react";
import "./styles/SkillsGround.css";
import Skills from "./Skills";
function SkillsGround() {
  return (
    <div className="SkillsGround">
      <div className="notification">
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div className="notibody">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default SkillsGround;
