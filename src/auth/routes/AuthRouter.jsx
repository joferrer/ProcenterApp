import React from "react";
import { LoginPage } from "../pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { RestablecerContrasenia } from "../pages/RestablecerContrasenia";
import { ProcenterCommerceRoute } from "../../procentercommerce/routes/ProcenterCommerceRoute";

const CHECKING = "checking" 
const AUTHENTICATED = "authenticated"
const NO_AUTHENTICATED = "no-authenticated"

const LOGIN_ROUTE = "/login"
const RESTABLECER_PASSWORD = "/restablecer-password"

export const AuthRouter = ({status}) => {
  console.log("AUTH ROUTER")
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={RESTABLECER_PASSWORD} element={<RestablecerContrasenia />} />
      <Route path={`${LOGIN_ROUTE}/*`} element={<Navigate to="/login" />} />
      <Route path={`${RESTABLECER_PASSWORD}/*`} element={<Navigate to="/" />} />
      <Route path="/*" element={<ProcenterCommerceRoute />} />

    </Routes>
  );
};
