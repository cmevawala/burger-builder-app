import React from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerCSS from "./Burger.module.css";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return <BurgerIngredients key={ingredientKey + index} type={ingredientKey} />;
      });
    }
  );

  return (
    <div className={BurgerCSS.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
