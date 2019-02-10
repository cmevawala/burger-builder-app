import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    };
  }

  addIngredientHandler = type => {
    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = this.state.ingredients[type] + 1;

    const additionalPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + additionalPrice;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };

  removeIngredientHandler = () => {};

  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls onAddIngredient={this.addIngredientHandler} />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
