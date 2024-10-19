export const IngredientList = ({ availableIngredients }) => {
  return (
    <>
      <ul>
        {availableIngredients.map((i, index) => (
          <li key={index} style={{ backgroundColor: i.color }}>
            {i.name}
          </li>
        ))}
      </ul>
    </>
  );
};
