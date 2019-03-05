import React from "react";

import ButtonCSS from './Button.module.css';

const Button = props => {
  return <button
className={[ButtonCSS.Button, ButtonCSS[props.btnType]].join(' ')}
   onClick={props.clicked}>{props.children}</button>;
};

export default Button;
