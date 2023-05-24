
import { Grid, Typography } from "@mui/material";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export const PhoneMui = ({ label= "TELEFONO" ,cambio , phoneNumber = "+57 "}) => {
  const [phone, setPhone] = React.useState(phoneNumber);

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  return (
        <Grid sx={{mt: "10px"}}>
            <Typography>{label}</Typography>
            <PhoneInput
                value={phone}
                name="telefono"
                defaultCountry="CO"
                onChange={(option) => {
                  handleChange(option);
                  cambio({
                    target: {
                      name: "telefono",
                      value: option,
            },
          });
        }}
      />
        </Grid> 
      

  );
};
