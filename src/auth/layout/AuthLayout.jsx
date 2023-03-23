import { Box, Grid } from "@mui/material";

import React from "react";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid container columns={12}>
      <Box
        xs={8}
        sx={{
          width: "55vw",
          height: "100vh",
        }}
      >
        {children}
      </Box>
      <Box
        xs={8}
        sx={{
          width: "45vw",
          height: "100vh",
          backgroundColor: "black",
        }}
      />
    </Grid>
  );
};
