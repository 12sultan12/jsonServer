import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";

const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/detail/:id", element: <Detail />, key: 2 },
  ];
  const PRIVATE = [
    { path: "/admin", element: <Admin />, key: 3 },
    { path: "/edit/:id", element: <Edit />, key: 4 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
      {PRIVATE.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
