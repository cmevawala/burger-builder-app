import React from "react";
import BackdropCSS from "./Backdrop.module.css";

const Backdrop = props => {
  return props.show ? (
    <div className={BackdropCSS.Backdrop} onClick={props.clicked} />
  ) : null;
};

export default Backdrop;
