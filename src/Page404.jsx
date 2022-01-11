import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <h1>No page found</h1>
      <Link to="/">TOPに戻る</Link>
    </>
  );
};
