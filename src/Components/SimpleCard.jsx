import React from "react";
import "./SimpleCard.css";

function SimpleCard({ edu, course, score }) {
  return (
    <div className="SCnotification">
      <div className="SCnotiglow" />
      <div className="SCnotiborderglow" />
      <div className="SCnotititle">
        <p>{edu}</p>
      </div>
      <div className="SCnotibody">
        <p>{course}</p>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default SimpleCard;
