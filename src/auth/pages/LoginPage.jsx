import { Link, Link as RouterLink } from "react-router-dom";
import React, { useMemo } from "react";
import { Google, Apple } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Hidden,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSingIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { Controller, useForm } from "react-hook-form";

export const LoginPage = () => {

  const {control,handleSubmit,} = useForm()
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth );
  const isAuthenticating = useMemo( () => status === 'checking', [status]);
//<Link component={RouterLink} color="inherit" to="/auth/proapp/home">
  const onSubmit = (data)=>{
    alert(JSON.stringify(data))
    //dispatch(startLoginWithEmailPassword(email,password))
  }
  const onGoogleSingIn = ()=>{
    dispatch(startGoogleSingIn())
  }
  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="animate__animated animate__fadeIn animate__faster">
        <Hidden smDown>
          <p className="texto">Inicio de Sesión</p>
        </Hidden>
        <Hidden smUp>
          <p className="textoCenter">Inicio de Sesión</p>
        </Hidden>
        <Grid item xs={12} sx={{ mt: 2, pl: 2, pr: 2 }}>
        <Controller
                name={"email"}
                control={control}
                rules={{required: true}}
                defaultValue=""
                render={({field,fieldState,formState})=>
                  <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!formState.errors.email}
                  helperText={!!formState.errors.email ?  "Ingrese un correo valido" : ""}
                  sx={{
                    input: {
                      background: "#D9D9D9",
                    },
                  }}
              />}
            />
          
        </Grid>
        <Grid item xs={12} sx={{ mt: 2, pl: 2, pr: 2 }}>
        <Controller
                name={"password"}
                control={control}
                rules={{required: true}}
                defaultValue=""
                render={({field,fieldState,formState})=>
                <TextField
                label="Contraseña"
                type="password"
                fullWidth
                onChange={field.onChange}
                error={!!formState.errors.password}
                helperText={!!formState.errors.password? "Ingrese una contraseña validan": ""}
                sx={{
                  input: {
                    background: "#D9D9D9",
                  },
                }}
              />}
            />

           <Link to="/auth/restablecer-password" style={{textDecoration: "none"}}>¿Has olvidado tu contraseña?</Link>
          
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
            
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Login
              </Button>
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
              onClick={onGoogleSingIn}
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
