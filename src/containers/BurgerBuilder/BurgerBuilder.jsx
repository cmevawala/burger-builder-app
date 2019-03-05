import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    };
  }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(ingredient => {
        return ingredients[ingredient];
      })
      .reduce((accumalator, currentValue) => {
        return (accumalator += currentValue);
      }, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = type => {
    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = this.state.ingredients[type] + 1;

    const additionalPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + additionalPrice;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });

    this.updatePurchaseState(updateIngredients);
  };

  removeIngredientHandler = type => {
    const updateIngredients = {
      ...this.state.ingredients
    };

    updateIngredients[type] = this.state.ingredients[type] - 1;

    const additionalPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - additionalPrice;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });

    this.updatePurchaseState(updateIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('Continue..');
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Model show={this.state.purchasing} hide={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} purchaseCanceled={this.purchaseCancelHandler} purchaseContinue={this.purchaseContinueHandler} />
        </Model>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            onAddIngredient={this.addIngredientHandler}
            onRemoveIngredient={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
