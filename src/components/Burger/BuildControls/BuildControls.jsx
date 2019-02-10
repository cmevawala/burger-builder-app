import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import BuildControlCSS from "../BuildControls/BuildControls.module.css";

const BuildControls = props => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
  ];

  return (
    <div className={BuildControlCSS.BuildControls}>
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
    </div>
  );
};

export default BuildControls;
