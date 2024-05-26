import React from "react";
import "./Cnoti.css";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
function Cnoti({ Cname = "NAME", Cprovider = "PROVIDER" }) {
  return (
    <div>
      <div className="Cnotification">
        <div className="Cnotiglow" />
        <div className="Cnotiborderglow" />
        <div className="Cnotititle">
          <WorkspacePremiumIcon sx={{ fontSize: "2em" }} />
          <p>{Cname}</p>
        </div>
        <div className="Cnotibody">{Cprovider}</div>
      </div>
    </div>
  );
}

export default Cnoti;
