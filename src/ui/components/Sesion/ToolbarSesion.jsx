import { Toolbar, Box } from "@mui/material";
import * as React from "react";
import CardUser from "./CardUser";

export default function ToolarSesion({ text, size }) {
  return (
    <Box
      position="fixed"
      sx={{
        width: size,
        height: "54px",
        backgroundColor: "white",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "end",
          backgroundColor: "white",
        }}
      >
        <CardUser text={text} />
      </Toolbar>
    </Box>
  );
}
