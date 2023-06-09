import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Catalogo } from "../pages/Catalogo";
import { InformacionEmpresarial } from "../pages/InformacionEmpresarial";
import Vvehiculo from "../pages/Vvehiculo";

export const ProcenterCommerceRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/catalogo" element={<Catalogo />}></Route>
      <Route path="/carro" element={<Vvehiculo />}></Route>
      <Route
        path="/sobre-nosotros"
        element={<InformacionEmpresarial />}
      ></Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
