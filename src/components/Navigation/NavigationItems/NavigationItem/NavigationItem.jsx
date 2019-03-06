import React from "react";

import NavigationItemCSS from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li className={NavigationItemCSS.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? NavigationItemCSS.active : null}
      >
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
