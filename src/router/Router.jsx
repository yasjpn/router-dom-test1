import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1Default } from "../Page1Default";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";
import { Page2 } from "../Page2";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page1" element={<Page1 />}>
        <Route index element={<Page1Default />} />
        <Route path="detaila" element={<Page1DetailA />} />
        <Route path="detailb" element={<Page1DetailB />} />
      </Route>
      <Route path="page2" element={<Page2 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
