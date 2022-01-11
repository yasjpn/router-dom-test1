import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <h2>Page1</h2>
      <Link to="/page1/detaila">DetailA</Link>
      <br />
      <Link to="/page1/detailb">DetailB</Link>
      <Outlet />
    </>
  );
};
