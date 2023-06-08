
export class Cliente {
    constructor(pnombre = "",pcedula =0,pcorreo="",ptelefono= ""){
        this.nombre    = pnombre
        this.cedula    = pcedula
        this.correo   = pcorreo
        this.telefono = ptelefono
    }
}

export class Venta  {
   constructor ({idvehiculo = "", cliente= new Cliente(),idasesor= ""}){
        this.idvehiculo = idvehiculo
        this.cliente    = cliente
        this.idasesor   = idasesor
   }
}

