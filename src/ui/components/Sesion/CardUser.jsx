import { Avatar, Grid, Typography, lighten } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export default function CardUser({ text }) {
  return (
    <Grid>
      <Grid sx={{ float: "left", mr: 2 }}>
        <Typography id="textcard" sx={{ fontSize: "15pt" }}>
          {text}
        </Typography>
        <Link href="#">
          <Typography sx={{ fontSize: "9pt" }}>Cerrar Sesion</Typography>
        </Link>
      </Grid>
      <Grid sx={{ float: "right" }}>
        <Avatar alt="Remy Sharp" sx={{ mr: 1, width: 45, height: 45 }} />
      </Grid>
    </Grid>
  );
}
