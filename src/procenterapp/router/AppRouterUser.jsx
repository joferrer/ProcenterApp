import { Navigate, Route, Routes } from "react-router-dom";

//import { useCheckAuth } from '../hooks';

//import { CheckingAuth } from '../ui';
import { AdminRouter } from './../VistaAdmin/routes/AdminRouter';
import { EmpleadoRouter } from "../VistaEmpleado/routes/EmpleadoRouter";

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
      <Route path="/proapp/*" element={<AdminRouter/>}></Route>
      <Route path="/user/*" element={<EmpleadoRouter />}></Route>
    </Routes>
  );
};
