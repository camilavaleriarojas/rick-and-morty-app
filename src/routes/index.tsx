import { Routes, Route } from "react-router-dom";
import Login from "../components/auth";
import Register from "../components/register";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default AppRoutes;
