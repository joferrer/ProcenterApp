import React from "react";
import MiniDrawer from "../../../ui/components/Sidebar";

export const ProcenterAppLayout = ({ children }) => {
  return <MiniDrawer Admin={true}>{children}</MiniDrawer>;
};
