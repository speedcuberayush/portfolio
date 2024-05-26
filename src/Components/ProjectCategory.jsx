import React from "react";
import "./ProjectCategory.css";
import AIsaas from "../Assets/aisaas.jpg";
import MERN from "../Assets/fullstack.jpg";
import Py from "../Assets/py.jpg";
function ProjectCategory() {
  return (
    <div className="ProjectCategory">
      <div
        className="PPPPPPPP"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          // padding: "0 3em",
          fontFamily: "Passion One",
          fontSize: "2em",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <h1 style={{ width: "70%" }}> PROJECT CATEGORIES...</h1>
        <p
          style={{
            textAlign: "left",
            width: "70%",
            fontFamily: "Staatliches",
            fontSize: "18px",
          }}
        >
          Explore a diverse spectrum of project categories I passionately dive
          into, from cutting-edge tech innovations to creative artistic
          endeavors, all meticulously crafted to showcase my multifaceted
          expertise and relentless curiosity.
        </p>
      </div>

      <div className="CatUpper">
        <PrCCard
          title={"NEXTJS | REACTJS"}
          backgroundImage="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/bxoLUywRIWcKyZPNXznO"
        />
        <PrCCard2 title={"AI SASS platforms"} backgroundImage={AIsaas} />
      </div>
      <div className="CatBottom">
        <PrCCard2 title={"FULL STACK(MERN)"} backgroundImage={MERN} />
        <PrCCard title={"PYTHON | REACT NATIVE"} backgroundImage={Py} />
      </div>
    </div>
  );
}

export default ProjectCategory;

const PrCCard = ({ title, backgroundImage = "q" }) => (
  <div
    className="PrCnotification"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="PrCnotiglow" />
    <div className="PrCnotiborderglow" />
    <div className="PrCnotititle">{title}</div>
    {/* <div className="PrCnotibody">Contribute to Open Source UI Elements</div> */}
  </div>
);
const PrCCard2 = ({ title, backgroundImage = "q" }) => (
  <div
    className="PrCnotification PrCnotification2"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="PrCnotiglow" />
    <div className="PrCnotiborderglow" />
    <div className="PrCnotititle">{title}</div>
    {/* <div className="PrCnotibody">Contribute to Open Source UI Elements</div> */}
  </div>
);
