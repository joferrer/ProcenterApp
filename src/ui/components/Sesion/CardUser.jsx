import { Avatar, Grid, Typography, lighten } from "@mui/material";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "./../../../store/auth/thunks";

export default function CardUser({ text, url }) {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };
  return (
    <Grid>
      <Grid sx={{ float: "left", mr: 2 }}>
        <Typography id="textcard" sx={{ fontSize: "15pt" }}>
          {text}
        </Typography>
        <Link onClick={onLogout}>
          <Typography sx={{ fontSize: "9pt", float: "right" }}>
            Cerrar Sesion
          </Typography>
        </Link>
      </Grid>
      <Grid sx={{ float: "right" }}>
        <Avatar alt={text} src={url} sx={{ mr: 1, width: 45, height: 45 }} />
      </Grid>
    </Grid>
  );
}
