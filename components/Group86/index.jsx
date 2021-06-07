import React from "react";
import "./Group86.css";

function Group86(props) {
  const { layer1, group85 } = props;

  return (
    <div className="group-86">
      <div className="white">
        <div className="layer-1" style={{ backgroundImage: `url(${layer1})` }}></div>
      </div>
      <img className="group-85" src={group85} />
    </div>
  );
}

export default Group86;
