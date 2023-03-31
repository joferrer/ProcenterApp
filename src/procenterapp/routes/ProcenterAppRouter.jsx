import { Home } from "../pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Catalogo } from "../pages/Catalogo";
import { Simulador } from "./../pages/Simulador";
import { Historial } from "./../pages/Historial";
import { Asesores } from "./../pages/Asesores";
import { Administrador } from "./../pages/Administrador";

export const ProcenterAppRouter = () => {
  return (
    <Routes>
      <Route path="/proapp/home" element={<Home />}></Route>
      <Route path="/proapp/catalogo" element={<Catalogo />}></Route>
      <Route path="/proapp/simulador" element={<Simulador />}></Route>
      <Route path="/proapp/historial" element={<Historial />}></Route>
      <Route path="/proapp/asesores" element={<Asesores />}></Route>
      <Route path="/proapp/administrar" element={<Administrador />}></Route>
    </Routes>
  );
};
