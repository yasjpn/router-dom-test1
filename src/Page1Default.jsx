import { Link, useNavigate } from "react-router-dom";

export const Page1Default = () => {
  const arr = [...Array(100).keys()];

  const navigate = useNavigate();

  const onClickDetailA = () => navigate("/page1/detaila", { state: arr });

  return (
    <>
      <h2>Page1(Default)</h2>
      <Link to="/page1/detaila" state={{ state: arr }}>
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailb">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </>
  );
};
