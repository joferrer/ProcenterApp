import axios from "axios";

export const ufpsformsApi = axios.create({
    baseURL: 'https://procenterapi-production.up.railway.app/',
    
})


const metodos = ['post','get','delete','update'];
const operaciones = {
    post:   async(url,body)=> await ufpsformsApi.post(url,body),
    get:    async(url,body)=> await ufpsformsApi.get(url),
    delete: async(url,body)=> await ufpsformsApi.delete(url),
    update: async(url,body)=> await ufpsformsApi.put(url,body),
}
const consulta = async(url,metodo,body) =>{
    try{
        const URL       = url;
        const operacion = operaciones[metodo];
        const response    = await operacion(URL,body);
        return response.data;
    }
    catch(error){
        if (error.response && error.response.data) {
            return {
              error: true,
              msg: 'Ha ocurrido un error: ' + JSON.stringify(error.response.data),
              data: error.response.data
            };
          } else {
            return {
              error: true,
              msg: 'Ha ocurrido un error: ' + error
            };
          }

    }

}

export const consultarApi = async (url)=>{
   return await consulta(url,metodos[1]);
}
export const postApi = async (url, body)=>{;
    return await consulta(url, metodos[0], body)
}
export const deleteApi= async (url) =>{
    return await consulta(url, metodos[2]);
}
export const updateApi= async (url,body) =>{
    return await consulta(url, metodos[3],body);
}

