import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const ProcenterCommerceRoute = () => {

    return (
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };