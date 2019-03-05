import React from "react";

import ModalCSS from "./Modal.module.css";

const Model = props => {
  return (
    <div
      className={ModalCSS.Modal}
      style={{ transform: props.show ? "translateY(0)" : "translateY(-100vh)", opacity: props.show ? "1" : "0" }}
    >
      {props.children}
    </div>
  );
};

export default Model;
