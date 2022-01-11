import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  return (
    <div>
      <h3>Page1 detail A</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};
