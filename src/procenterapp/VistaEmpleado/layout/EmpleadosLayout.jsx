import React from "react";
import MiniDrawer from "../../../ui/components/Sidebar";

export const EmpleadosLayout = ({ children }) => {
  return <MiniDrawer Admin={false}>{children}</MiniDrawer>;
};
