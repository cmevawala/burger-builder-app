import React from "react";

import ModalCSS from "./Modal.module.css";

const Model = props => {
  return <div className={ModalCSS.Modal}>{props.children}</div>;
};

export default Model;
