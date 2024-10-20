import { useState } from "react";

const initialStack = [];

export const IngredientList = ({ availableIngredients, addToBurger }) => {
  return (
    <>
      <ul>
        {availableIngredients.map((i, index) => (
          <li
            key={index}
            style={{ backgroundColor: i.color }}
            onClick={() => addToBurger(i)}
          >
            {i.name}
          </li>
        ))}
      </ul>
    </>
  );
};
