import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { RestablecerContrasenia } from "../pages/RestablecerContrasenia";

const CHECKING = "checking" 
const AUTHENTICATED = "authenticated"
const NO_AUTHENTICATED = "no-authenticated"

export const AuthRouter = ({status}) => {
  console.log("AUTH ROUTER")
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/restablecer-password" element={<RestablecerContrasenia />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
