import { Toolbar, Box } from "@mui/material";
import * as React from "react";
import CardUser from "./CardUser";

export default function ToolarSesion({ text, size }) {
  return (
    <Box
      position="fixed"
      backgroundColor="white"
      sx={{
        width: size,
        height: "54px",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "end",
        }}
      >
        <CardUser text={text} />
      </Toolbar>
    </Box>
  );
}
