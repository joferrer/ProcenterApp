import { Navigate, Route, Routes } from "react-router-dom";
import { AsesoresEmpleado } from "../pages/AsesoresEmpledo";
import { RegistrarVenta } from "../pages/RegistrarVenta";


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
      <Route path="/asesores" element={<AsesoresEmpleado/>}></Route>
      <Route path="/registrar-venta" element={<RegistrarVenta/>}></Route>
    </Routes>
  );
};