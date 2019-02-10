import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BurgerIngredientCSS from './BurgerIngredients.module.css';

class BurgerIngredients  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        let ingredient = null;

        switch(this.props.type) {
            case 'bread-botton':
                ingredient = <div className={BurgerIngredientCSS.BreadBottom}></div>;
                break;
    
            case 'bread-top':
                ingredient = (
                    <div className={BurgerIngredientCSS.BreadTop}>
                        <div className={BurgerIngredientCSS.Seeds1}></div>
                        <div className={BurgerIngredientCSS.Seeds2}></div>
                    </div>
                );
                break;
    
            case 'meat':
                ingredient = <div className={BurgerIngredientCSS.Meat}></div>;
                break;
    
            case 'cheese':
                ingredient = <div className={BurgerIngredientCSS.Cheese}></div>;
                break;
    
            case 'salad':
                ingredient = <div className={BurgerIngredientCSS.Salad}></div>;
                break;
    
            case 'bacon':
                ingredient = <div className={BurgerIngredientCSS.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}
 
export default BurgerIngredients;

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}