import React from "react";
import MiniDrawer from "../../../ui/components/Sidebar";

export const ProcenterAppLayout = ({ children, Admin }) => {
  console.log(Admin);
  return <MiniDrawer Admin={Admin}>{children}</MiniDrawer>;
};
