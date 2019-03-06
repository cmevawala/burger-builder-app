import React from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import layoutCSS from "./Layout.module.css";

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <main className={layoutCSS.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
