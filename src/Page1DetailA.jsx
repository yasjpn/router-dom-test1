import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h3>Page1 detail A</h3>
    </div>
  );
};
