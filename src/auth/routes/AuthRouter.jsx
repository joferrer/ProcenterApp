import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { RestablecerContrasenia } from "../pages/RestablecerContrasenia";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/restablecer-password" element={<RestablecerContrasenia />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
