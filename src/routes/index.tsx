import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
