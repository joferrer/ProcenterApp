import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { AppRouterUser } from "../procenterapp/router/AppRouterUser";
import { authDispatch } from "../store/auth/authDispatch";
import { CheckingAuth } from "../ui/components/FeedbackComponents";


const CHECKING = "checking" 
const AUTHENTICATED = "authenticated"
const NO_AUTHENTICATED = "no-authenticated"

export const AppRouter = () => {
  
  const {status} = authDispatch();

  if(status === CHECKING){
   return <CheckingAuth />
  }
  
      //<Route path="/*" element={<Navigate to="/auth/login" />} />
  
  //const status = "authenticated";
  return (
    <Routes>
      {status === AUTHENTICATED ? (
          <Route path="/*" element={<AppRouterUser />}></Route>
        ) : (
          <Route path="/auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
