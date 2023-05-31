import { Navigate, Route, Routes } from "react-router-dom";
import { AsesoresEmpleado } from "../pages/AsesoresEmpledo";
import { RegistrarVenta } from "../pages/RegistrarVenta";
import { Catalogo } from "./../../VistaAdmin/pages/Catalogo";
import { RegistrarAdquisicion } from "./../../VistaPublicista/pages/RegistrarAdquisicion";
import HistorialAsesor from "./../pages/HistorialAsesor";
import { Simulador } from "./../../VistaAdmin/pages/Simulador";

export const EmpleadoRouter = () => {
  //const {status} = useCheckAuth();

  // if(status === 'checking'){
  // return <CheckingAuth />
  //}

  /*
  {status === "authenticated" ? (
        <Route path="/*" element={<ProcenterAppRouter />} />
      ) : (
        <Route path="/auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
  */
  //const status = "authenticated";
  return (
    <Routes>
      <Route path="/catalogo" element={<Catalogo admin={"asesor"} />}></Route>
      <Route
        path="/registrar-venta"
        element={<RegistrarVenta admin={"asesor"} />}
      ></Route>
      <Route path="/simulador" element={<Simulador admin={"asesor"} />}></Route>
      <Route
        path="/adquisiciones"
        element={<RegistrarAdquisicion admin={"asesor"} />}
      ></Route>

      <Route
        path="/historialAsesor"
        element={<HistorialAsesor admin={"asesor"} />}
      ></Route>
    </Routes>
  );
};
