import { Home } from "../pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const ProcenterAppRouter = () => {
  return (
    <Routes>
      <Route path="/proapp/home" element={<Home />}></Route>
    </Routes>
  );
};
