
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from '../auth/routes/AuthRouter';

//import { useCheckAuth } from '../hooks';
import {ProcenterAppRouter  } from '../procenterapp';

//import { CheckingAuth } from '../ui';


export const AppRouter = () => {

  
  //const {status} = useCheckAuth();  

 // if(status === 'checking'){
   // return <CheckingAuth />
  //}

  const status = 'authenticated'
  return (
    <Routes>

        {
          status === 'authenticated' ? 
          <Route path="/*" element={<ProcenterAppRouter/>} />
          :<Route path="/auth/*" element={<AuthRouter/>} />
        }

        <Route path="/*" element={<Navigate to ='/auth/login'/>} />
        
    </Routes>
  )
}