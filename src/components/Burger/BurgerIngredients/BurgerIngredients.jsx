import React, { Component } from "react";
import PropTypes from "prop-types";

import BurgerIngredientCSS from "./BurgerIngredients.module.css";

class BurgerIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={BurgerIngredientCSS.BreadBottom} />;
        break;

      case "bread-top":
        ingredient = (
          <div className={BurgerIngredientCSS.BreadTop}>
            <div className={BurgerIngredientCSS.Seeds1} />
            <div className={BurgerIngredientCSS.Seeds2} />
          </div>
        );
        break;

      case "meat":
        ingredient = <div className={BurgerIngredientCSS.Meat} />;
        break;

      case "cheese":
        ingredient = <div className={BurgerIngredientCSS.Cheese} />;
        break;

      case "salad":
        ingredient = <div className={BurgerIngredientCSS.Salad} />;
        break;

      case "bacon":
        ingredient = <div className={BurgerIngredientCSS.Bacon} />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredients;
