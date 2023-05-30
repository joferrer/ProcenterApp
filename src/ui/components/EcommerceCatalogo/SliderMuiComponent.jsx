import { Slider } from '@mui/material'
import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react';


function valuetext(value) {
    return `${value}a`;
  }

export const SliderMuiComponent = ({rango=[20,37]}) => {

    const [value, setValue] = useState(rango);
//useMemo(()=> setValue[rango],[rango])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <Slider 
        getAriaLabel={() => 'Temperature range'}
        size='small'
        value={value}
        min={rango[0]}
        max={rango[1]}
        sx={{width: "80%"}}
        onChange={handleChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
    />
  )
}
