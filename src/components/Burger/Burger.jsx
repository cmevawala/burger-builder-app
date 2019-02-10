import React from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerCSS from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={BurgerCSS.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="meat" />
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
