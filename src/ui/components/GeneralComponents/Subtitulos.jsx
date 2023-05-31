import { Typography } from '@mui/material';
import React from 'react';

const Subtitulos = ({subtitulo}) => {
    return (
        <Typography
            fontSize={"25px"}
            fontWeight={"300"}
            sx={{
              height: "30px",
              ml: "30px",
              "@media (max-width:600px)": {
                ml: "10px",
              },
              mt: 7,
            }}
          >{subtitulo}</Typography>
    );
}

export default Subtitulos;
