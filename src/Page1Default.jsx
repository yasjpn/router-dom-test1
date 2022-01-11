import { Link } from "react-router-dom";

export const Page1Default = () => {
  return (
    <>
      <h2>Page1(Default)</h2>
      <Link to="/page1/detaila">DetailA</Link>
      <br />
      <Link to="/page1/detailb">DetailB</Link>
    </>
  );
};
