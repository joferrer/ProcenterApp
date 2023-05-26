import React from "react";
import MiniDrawer from "../../../ui/components/Sidebar";

export const ProcenterAppLayout = ({ children, Admin }) => {

  return <MiniDrawer Admin={Admin}>{children}</MiniDrawer>;
};
