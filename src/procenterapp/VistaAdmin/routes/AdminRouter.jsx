import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RegistrarVenta } from "./../../VistaEmpleado/pages/RegistrarVenta";
import {
  Home,
  Catalogo,
  Simulador,
  Historial,
  Asesores,
  Administrador,
} from "../pages/";
import { Adquisiciones } from "../../VistaPublicista/pages/Adquisiciones";
import { RegistrarAdquisicion } from "./../../VistaPublicista/pages/RegistrarAdquisicion";
/**! CAMBIAR POR JX PARA ESO*/
export const AdminRouter = () => {
  console.log("wat");
  return (
    <Routes>
      <Route path="/home" element={<Home admin={"admin"} />}></Route>
      <Route path="/catalogo" element={<Catalogo admin={"admin"} />}></Route>
      <Route path="/simulador" element={<Simulador admin={"admin"} />}></Route>
      <Route path="/historial" element={<Historial admin={"admin"} />}></Route>
      <Route path="/asesores" element={<Asesores admin={"admin"} />}></Route>
      <Route path="/administrar" element={<Administrador />}></Route>
      <Route
        path="/registrar-venta"
        element={<RegistrarVenta admin={"admin"} />}
      ></Route>
      <Route
        path="/adquisiciones"
        element={<Adquisiciones admin={"admin"} />}
      ></Route>
      <Route
        path="/registrarAdquisiciones"
        element={<RegistrarAdquisicion admin={"admin"} />}
      ></Route>
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
