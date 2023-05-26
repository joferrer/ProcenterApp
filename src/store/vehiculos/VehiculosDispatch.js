

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCargarVehiculos } from './VehiculosThunks'

export const VehiculosDispatch = () => {

    const dispatch = useDispatch()
    const {vehiculos, isLoading, error} = useSelector(state => state.vehiculos)

    const cargarVehiculos = async()=>{
        await dispatch(startCargarVehiculos())
    }

    useEffect(() => {
        if(vehiculos.length == 0 ) {
            cargarVehiculos()
        }  
    }, [vehiculos])
    

  return {
    vehiculos,
    isLoading,
    error
  }
}
