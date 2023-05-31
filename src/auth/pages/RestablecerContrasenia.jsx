import React, { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { Button, Grid, Hidden, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startRecuperarContrasenia } from "../../store/auth";
import { SnackbarComponent } from "../../ui/components/FeedbackComponents/Snackbar";

export const RestablecerContrasenia = () => {
  
  const { control, handleSubmit } = useForm();
  const [enviado, setenviado] = useState(false);
  const [error, seterror] = useState("");
  
  const dispatch = useDispatch()

  const onSubmit = async(data) => {
   
    const resp = await dispatch(startRecuperarContrasenia(data.email))
    if(!resp.ok) {
      console.log(JSON.stringify(resp))
      seterror(resp.error)
      return;
    } 
    setenviado(true);
  };

  return (
    <AuthLayout>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate__animated animate__fadeIn animate__faster"
      >
       <SnackbarComponent mensaje={error} mostrar={error != ""} cerrar={seterror}/>
        <Hidden smDown>
          <p className="texto">Restablecer contraseña</p>
        </Hidden>
        <Hidden smUp>
          <p className="textoCenter">Restablecer contraseña</p>
        </Hidden>
        {enviado ? (
          <Grid>
            <Typography>
              Se ha enviado el enlace de restablecimiento a su correo.
            </Typography>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Regresar al login
            </Link>
          </Grid>
        ) : (
          <Formulario control={control} />
          
        )}
      </form>
    </AuthLayout>
  );
};


const Formulario = ({ control }) => {
  return (
    <Grid item xs={12} sx={{ mt: 2, pl: 2, pr: 2 }}>
      <Controller
        name={"email"}
        control={control}
        rules={{ required: true }}
        defaultValue=""
        render={({ field, fieldState, formState }) => (
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
            helperText={
              !!formState.errors.email ? "Ingrese un correo valido" : ""
            }
            sx={{
              input: {
                background: "#D9D9D9",
              },
            }}
          />
        )}
      />
      <Grid
        container
        spacing={(2, 2)}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          mb: 2,
          mt: 1,
        }}
      >
        <Grid item xs={12} sm={6}>
          <Button type="submit" variant="contained" color="secondary" fullWidth>
            Restablecer
          </Button>
        </Grid>
      </Grid>
      <Link to="/login" style={{ textDecoration: "none" }}>
        Regresar al login
      </Link>
    </Grid>
  );
};
