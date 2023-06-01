import { Toolbar, Box } from "@mui/material";
import * as React from "react";
import CardUser from "./CardUser";

export default function ToolarSesion({ text, size, url }) {
  return (
    <Box
      position="fixed"
      sx={{
        width: size,
        height: "54px",
        backgroundColor: "white",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: "end",
          backgroundColor: "white",
        }}
      >
        <CardUser url={url} text={text} />
      </Toolbar>
    </Box>
  );
}
