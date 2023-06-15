
export class Cliente {
    constructor(pnombre = "",pcedula =0,pcorreo="",ptelefono= ""){
        this.nombre    = pnombre
        this.cedula    = Number(pcedula)
        this.correo   = pcorreo
        this.telefono = ptelefono
    }
    toString() {
        let result = "";
        for (const key in this) {
          if (this.hasOwnProperty(key)) {
            result += `${key}: ${this[key]}\n`;
          }
        }
        return result;
      }
}

export class Venta  {
   constructor ({idvehiculo = "", cliente= new Cliente(),idasesor= "", descripcion="", precio= 0}){
        this.idvehiculo = idvehiculo
        this.cliente    = cliente
        this.idasesor   = idasesor
        this.descripcion = descripcion
        this.precio = Number(precio)
   }

   toString() {
    let result = "";
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        if (key === "cliente") {
          result += `cliente:\n${this.cliente.toString()}`;
        } else {
            if(key !== "idasesor") result += `${key}: ${this[key]}\n`;
        }
      }
    }
    return result;
  }
}

