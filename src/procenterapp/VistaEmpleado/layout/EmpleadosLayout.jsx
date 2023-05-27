import React from "react";
import MiniDrawer from "../../../ui/components/Sidebar";

export const EmpleadosLayout = ({ children, admin }) => {
  return <MiniDrawer Admin={admin}>{children}</MiniDrawer>;
};
