export const BurgerStack = ({ stack, removeBurger }) => {
  return (
    <>
      <ul>
        {stack.map((i, index) => (
          <li
            key={index}
            style={{ backgroundColor: i.color }}
            onClick={() => removeBurger(i, index)}
          >
            {i.name}
          </li>
        ))}
      </ul>
    </>
  );
};
