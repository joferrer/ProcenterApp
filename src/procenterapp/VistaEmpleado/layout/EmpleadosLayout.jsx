import React from "react";
import MiniDrawer from "../../../ui/components/Sidebar";

export const EmpleadosLayout = ({ children, Admin }) => {
  return <MiniDrawer Admin={Admin}>{children}</MiniDrawer>;
};
