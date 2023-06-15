import React, { useState } from "react";
import { Collapse, Box, Button, Grid, Typography } from "@mui/material";
import NonLinearSlider from "./slider";
import CheckboxList from "./Chekes";
import { Link } from "react-router-dom";

const HorizontalCollapse = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState(0);
  const [formulario, setFormulario] = useState({});
  const handleToggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const formu = marca === "" && precio === 0;
  const handleSubmit = () => {
    setFormulario({ marca: marca, precio: precio });
  };

  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,
        ml: 5,
        height: "auto",
      }}
    >
      <Button
        sx={{
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "darkgrey",
          },
          color: "white",
          width: "200px",
          height: "60px",
          fontSize: "25px",
          fontWeight: "bold:",
        }}
        onClick={handleToggleCollapse}
      >
        {isExpanded ? "FILTRAR POR <" : "FILTRAR POR >"}
      </Button>
      <Collapse in={isExpanded} orientation="vertical">
        {isExpanded ? (
          <form>
            <Box display="flex" sx={{ ml: 2 }}>
              <Grid container sx={{ backgroundColor: "white" }}>
                <Grid
                  item
                  sx={{
                    backgroundColor: "lightgray",
                    m: 1,
                    p: 2,
                    borderRadius: "5px",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>Marca</Typography>
                  <CheckboxList marca={setMarca} />
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: "lightgray",
                    m: 1,
                    p: 2,
                    borderRadius: "5px",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Precio Máximo
                  </Typography>
                  <NonLinearSlider precio={setPrecio} />
                </Grid>
                <Grid item>
                  {!formu ? (
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={"/catalogo?marca=" + marca + "&precio=" + precio}
                    >
                      <Button
                        onClick={handleSubmit}
                        sx={{
                          width: "100px",
                          height: "40px",
                          fontSize: "20px",
                          color: "white",
                          fontWeight: "bold:",
                          backgroundColor: "black",
                          "&:hover": {
                            backgroundColor: "darkgrey",
                          },
                        }}
                      >
                        Filtrar
                      </Button>
                    </Link>
                  ) : (
                    <></>
                  )}
                </Grid>
              </Grid>
            </Box>
          </form>
        ) : (
          <></>
        )}
      </Collapse>
    </Box>
  );
};

export default HorizontalCollapse;
