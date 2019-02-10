import React from "react";

import BuildControlCSS from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={BuildControlCSS.BuildControl}>
      <div className={BuildControlCSS.label}>{props.label}</div>
      <button className={BuildControlCSS.Less}>Less</button>
      <button className={BuildControlCSS.More} onClick={props.onMoreClick}>More</button>
    </div>
  );
};

export default BuildControl;
