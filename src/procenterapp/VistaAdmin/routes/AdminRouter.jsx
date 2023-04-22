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
export const AdminRouter= () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/catalogo" element={<Catalogo />}></Route>
      <Route path="/simulador" element={<Simulador />}></Route>
      <Route path="/historial" element={<Historial />}></Route>
      <Route path="/asesores" element={<Asesores />}></Route>
      <Route path="/administrar" element={<Administrador />}></Route>
    </Routes>
  );
};
