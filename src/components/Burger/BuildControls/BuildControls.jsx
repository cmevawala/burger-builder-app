import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import BuildControlsCSS from "../BuildControls/BuildControls.module.css";

const BuildControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];

  return (
    <div className={BuildControlsCSS.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

      {controls.map(control => (
        <BuildControl
          key={control.label}
          label={control.label}
          type={control.type}
          onMoreClick={() => props.onAddIngredient(control.type)}
          onLessClick={() => props.onRemoveIngredient(control.type)}
          disabled={props.disabled[control.type]}
        />
      ))}

      <button className={BuildControlsCSS.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;
