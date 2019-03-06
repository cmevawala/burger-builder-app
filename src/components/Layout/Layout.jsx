import React from "react";
import Aux from "../../hoc/Auxilary";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import layoutCSS from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  return (
    <Aux>
      <SideDrawer/>
      <Toolbar />
      <main className={layoutCSS.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
