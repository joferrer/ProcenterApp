import { Navigate, Route, Routes } from "react-router-dom";
import { RegistrarAdquisicion } from "../pages/RegistrarAdquisicion";
import { Adquisiciones } from "../pages/Adquisiciones";

export const PublicistaRouter = () => {
  return (
    <Routes>
      <Route
        path="/adquisiciones"
        element={<Adquisiciones admin={"publi"} />}
      ></Route>
      <Route path="/*" element={<Navigate to="/adquisiciones" />} />
    </Routes>
  );
};
