export const BurgerStack = ({ stack }) => {
  return (
    <>
      <ul>
        {stack.map((i, index) => (
          <li key={index} style={{ backgroundColor: i.color }}>
            {i.name}
          </li>
        ))}
      </ul>
    </>
  );
};
