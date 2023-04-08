import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Catalogo,
  Simulador,
  Historial,
  Asesores,
  Administrador,
} from "../pages/";
/**! CAMBIAR POR JX PARA ESO*/
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
