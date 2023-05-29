import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRouter } from './../VistaAdmin/routes/AdminRouter';
import { EmpleadoRouter } from "../VistaEmpleado/routes/EmpleadoRouter";
import { PublicistaRouter } from "../VistaPublicista";
import { authDispatch } from "../../store/auth/authDispatch";

const ROL_ASESOR        = "ASESOR"
const ROL_CLIENTE       = "CLIENTE"
const ROL_PUBLICISTA    = "PUBLICISTA"
const ROL_ADMINISTRADOR = "ADMINISTRADOR"


export const AppRouterUser = () => {
  const {rol} = authDispatch();

  if(rol === ROL_ADMINISTRADOR){
    return <Routes>
     
    </Routes>
  }
  return (
    <Routes>
      {
        rol === ROL_ASESOR  ? 
        <Route path="/asesor/*" element={<EmpleadoRouter />}></Route>
        :
        rol === ROL_PUBLICISTA ? 
        <Route path="/publicista/*" element={<PublicistaRouter />}></Route>
        :
        rol === ROL_ADMINISTRADOR ? 
        <Route path="/proapp/*" element={<AdminRouter />}></Route>
        :
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      }
      
      
      
    </Routes>
  );
};
