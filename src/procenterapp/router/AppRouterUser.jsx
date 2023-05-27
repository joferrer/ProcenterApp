import { Navigate, Route, Routes } from "react-router-dom";

//import { useCheckAuth } from '../hooks';

//import { CheckingAuth } from '../ui';
import { AdminRouter } from './../VistaAdmin/routes/AdminRouter';
import { EmpleadoRouter } from "../VistaEmpleado/routes/EmpleadoRouter";
import { PublicistaRouter } from "../VistaPublicista";

export const AppRouterUser = () => {
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
      <Route path="/proapp/*" element={<AdminRouter />}></Route>
      <Route path="/asesor/*" element={<EmpleadoRouter />}></Route>
      <Route path="/publicista/*" element={<PublicistaRouter />}></Route>
    </Routes>
  );
};
