import React from "react";
import ProcenterCommerceLayout from "./../layout/ProcenterCommerceLayout";
import { Box, Grid, Typography, Modal, Button } from "@mui/material";
import ImagenesPreview from "../../ui/components/GeneralComponents/ImagenesPreview";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCargarVechiculoID } from "../../store/vehiculos/VehiculosThunks";
import { useEffect } from "react";

const vehiculoIni = {
  anio: 0,
  color: "",
  disponible: false,
  id: "",
  imagenes: [],
  marca: "",
  modelo: "",
  motor: "",
  nombre: "",
  otros: "",
  precio: 0,
  rin: "",
};

const Vvehiculo = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(true);
  const [no, setNo] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [vehiculo, setVehiculo] = useState(vehiculoIni);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (JSON.stringify(vehiculo) === JSON.stringify(vehiculoIni)) {
      const imprimir = async () => {
        try {
          const resp = await dispatch(startCargarVechiculoID(id));
          if (resp.ok) {
            setVehiculo(resp.data);
          } else {
            setNo(true);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsloading(false);
        }
      };
      imprimir();
    }
  }, [vehiculo]);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              height: "100%",
              fontSize: "40pt",
              mt: "250px",
              color: "black",
            }}
          >
            Cargando...
          </Typography>
        </Box>
      ) : (
        <>
          {no ? (
            <Box>
              <Typography sx={{ fontSize: "50pt" }}>
                No existe este Vehiculo....
              </Typography>
            </Box>
          ) : (
            <ProcenterCommerceLayout>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Box sx={{ width: "75%" }}>
                  <Box sx={{ height: "600px" }}>
                    <img
                      className="carro"
                      src={vehiculo[0]?.imagenes[3]}
                      alt="Portada"
                    />

                    <img
                      className="profile-image"
                      src={vehiculo[0]?.imagenes[0]}
                      alt="Perfil"
                    />
                    <Box className="profile-titulo">
                      <Box
                        sx={{
                          width: "100%",
                          "@media (max-width:899px)": { width: "100%" },
                        }}
                      >
                        <Typography
                          sx={{
                            width: "100%",
                            fontSize: "22pt",
                            fontFamily: "Segoe UI",
                            "@media (max-width:899px)": { fontSize: "18pt" },
                          }}
                        >
                          {vehiculo[0]?.nombre}
                        </Typography>
                        <Typography
                          sx={{
                            width: "100%",
                            fontSize: "19pt",
                            fontWeight: "bold",
                          }}
                        >
                          COP ${vehiculo[0]?.precio.toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Grid container sx={{ mt: 4 }}>
                    <Grid item sm={6} xs={12}>
                      <Typography sx={{ fontWeight: "bold", ml: 1 }}>
                        GALERÍA
                      </Typography>
                      <ImagenesPreview imagenes={vehiculo[0]?.imagenes} />
                    </Grid>
                    <Grid item sm={6}>
                      <Typography sx={{ fontWeight: "bold", ml: 1 }}>
                        CARACTERÍSTICAS
                      </Typography>
                      <ul className="profile-list">
                        <li>{vehiculo[0]?.anio}</li>
                        <li>{vehiculo[0]?.color}</li>

                        {vehiculo[0].otros.map((elemento, index) => (
                          <li key={index}>{elemento}</li>
                        ))}
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              ></Box>
            </ProcenterCommerceLayout>
          )}
        </>
      )}
    </>
  );
};

export default Vvehiculo;
