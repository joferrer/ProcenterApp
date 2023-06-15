import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";
import updateLocale from "dayjs/plugin/updateLocale";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(updateLocale);

const timezoneLocation = "America/Bogota";
dayjs.tz.setDefault(timezoneLocation);

const fechaact = dayjs().tz(timezoneLocation).format("DD-MM-YYYY");

const ModalElim = () => {
  const [fecha, setFecha] = useState(dayjs(fechaact, "DD-MM-YYYY"));
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleCheckbox1Change = () => {
    setChecked1(true);
    setChecked2(false);
  };

  const handleCheckbox2Change = () => {
    setChecked1(false);
    setChecked2(true);
  };

  return (
    <Box
      sx={{
        width: "40%",
        "@media (max-width:799px)": {
          width: "80%",
        },
        "@media (max-width:599px)": {
          width: "70%",
          mt: 0,
        },
      }}
    >
      <Box sx={{ backgroundColor: "white", borderRadius: "20px" }}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: "20px",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ mt: 1, pr: 4 }}> Tomar Fecha Actual</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked1}
                onChange={handleCheckbox1Change}
                value={checked1}
              />
            }
            label={"Si"}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked2}
                onChange={handleCheckbox2Change}
                value={checked2}
              />
            }
            label={"No"}
          />
        </Box>
        {checked2 ? (
          <Box
            sx={{
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              p: 3,
            }}
          >
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ width: "100%" }}
            >
              <DemoContainer components={["DatePicker"]} sx={{ width: "100%" }}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Fecha de Desvinculacion"
                  value={fecha}
                  minDate={dayjs(fechaact, "DD-MM-YYYY")}
                  maxDate={dayjs(fechaact, "DD-MM-YYYY").add(2, "day")}
                  onChange={(date) => setFecha(date)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        ) : (
          <></>
        )}
        {checked1 || checked2 ? (
          <Box sx={{ display: "flex", justifyContent: "end", p: 2, mr: 2 }}>
            <Button
              sx={{
                backgroundColor: "gray",
                color: "white",
                "&:hover": {
                  backgroundColor: "lightgreen",
                  color: "green",
                },
              }}
            >
              Confirmar
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export default ModalElim;
