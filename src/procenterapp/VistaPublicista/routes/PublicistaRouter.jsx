import { Route, Routes } from "react-router-dom";
import { RegistrarAdquisicion } from "../pages/RegistrarAdquisicion";
import { Adquisiciones } from "../pages/Adquisiciones";

export const PublicistaRouter = () => {
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
        <Route path="/registrar-adquisicion" element={<RegistrarAdquisicion/>}></Route>
        <Route path="/adquisiciones" element={<Adquisiciones/>}></Route>
      </Routes>
    );
  };