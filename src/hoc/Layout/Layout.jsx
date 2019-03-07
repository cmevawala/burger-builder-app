import React, { Component } from "react";
import Aux from "../Auxilary/Auxilary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import layoutCSS from "./Layout.module.css";


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: true
    };
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={layoutCSS.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
