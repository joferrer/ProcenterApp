import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Google, Apple } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Hidden,
  Link,
} from "@mui/material";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form className="animate__animated animate__fadeIn animate__faster">
        <Hidden smDown>
          <p className="texto">Inicio de Sesión</p>
        </Hidden>
        <Hidden smUp>
          <p className="textoCenter">Inicio de Sesión</p>
        </Hidden>
        <Grid item xs={12} sx={{ mt: 2, pl: 2, pr: 2 }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Correo"
            type="email"
            placeholder="correo@google.com"
            fullWidth
            sx={{
              input: {
                background: "#D9D9D9",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2, pl: 2, pr: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            fullWidth
            name="password"
            sx={{
              input: {
                background: "#D9D9D9",
              },
            }}
          />
        </Grid>

        <Grid
          container
          spacing={(2, 2)}
          sx={{ mb: 2, mt: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} sm={6}>
            <Link component={RouterLink} color="inherit" to="/auth/proapp/home">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Login
              </Button>
            </Link>
          </Grid>

          <Grid
            item
            container
            direction="row"
            justifyContent="end"
            sm={8}
            xs={8}
          >
            <Button
              variant="contained"
              color="butto"
              fullWidth
              sx={{ mt: 2, pl: 2, pr: 2 }}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="end"
            sm={9}
            xs={8}
          >
            <Button
              variant="contained"
              color="butto"
              fullWidth
              sx={{ mt: 2, pl: 2, pr: 2 }}
            >
              <Apple />
              <Typography sx={{ ml: 1 }}>Apple</Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
