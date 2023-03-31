import React from "react";
import { LoginPage } from "../pages/LoginPage";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  );
};
