import React from 'react';

import BurgerIngredientCSS from './BurgerIngredients.module.css';

const BurgerIngredients = (props) => {
    let ingredient = null;

    switch(props.type) {
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

    return (
        
    );
}
 
export default BurgerIngredients;