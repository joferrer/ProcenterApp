import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";

//import { useCheckAuth } from '../hooks';

//import { CheckingAuth } from '../ui';
import { LoginPage } from "./../auth/pages/LoginPage";
import { AppRouterUser } from "../procenterapp/router/AppRouterUser";

export const AppRouter = () => {
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
      <Route path="/auth/login" element={<LoginPage />}></Route>
      <Route path="/*" element={<AppRouterUser />}></Route>
    </Routes>
  );
};
