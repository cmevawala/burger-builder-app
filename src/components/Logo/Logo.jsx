import React from "react";

import LogoCSS from './Logo.module.css';

import BurgerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={LogoCSS.Logo} style={{height: props.height}}>
      <img src={BurgerLogo} alt="My Burger" />
    </div>
  );
};

export default Logo;