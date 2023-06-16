import { Box, Grid, Hidden } from "@mui/material";

import React from "react";
import img3 from "../../../public/Images/LUCKY5.png";

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
          <img id="im2" src={img3} />
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
              width: "55%",
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
              width: "45%",
              height: "100vh",
              backgroundColor: "black",
            }}
          >
            <img src={img3} />
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  );
};
