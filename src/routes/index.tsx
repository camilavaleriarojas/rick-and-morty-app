import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import PrivateRoute from "./privateRoute";
import { useAppSelector, RootState } from "../redux/store";

import Login from "../components/pages/auth";
import Register from "../components/pages/register";
import Home from "../components/pages/home";
import { tokenListener } from "../helper/firebase";

const AppRoutes = (): JSX.Element => {
  const { authUser: token } = useAppSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    tokenListener();
  }, []);

  useEffect(() => {
    if (token.token) {
      pathname === "/" ? navigate("/home") : navigate(pathname);
    }
  }, [navigate, pathname, token]);
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
