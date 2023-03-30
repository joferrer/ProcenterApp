import { Box, Grid, Hidden } from "@mui/material";

import React from "react";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid>
      <Hidden smUp>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "black",
            width: "100vw",
            height: "20vw",
          }}
        >
          <img id="im2" src="../../../public/Images/LUCKY5.png" />
        </Box>
        {children}
      </Hidden>

      <Hidden smDown>
        <Grid container columns={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            xs={8}
            sx={{
              width: "55vw",
              height: "100vh",
            }}
          >
            {children}
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            xs={8}
            sx={{
              width: "45vw",
              height: "100vh",
              backgroundColor: "black",
            }}
          >
            <img src="../../../public/Images/LUCKY5.png" />
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
};
