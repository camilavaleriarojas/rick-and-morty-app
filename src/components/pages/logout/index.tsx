import React from "react";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../../helper/firebase/index";
import { Button } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await firebaseApp.auth().signOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button variant="contained" onClick={handleLogout} sx={{ height: "40px" }}>
      Logout
    </Button>
  );
};

export default Logout;
