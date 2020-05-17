//requires
const axios = require('axios'); //para traer coordenadas

//funcion para obtener la latitud y la longitud
const getLugarLatLng = async(direccion) => {
    //pasamos el string a codificado especial
    const encodeUrl = encodeURI(direccion);
    //instanciamos axios para poder hacer las peticiones 
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'a7eaf4e3e0mshe728097b85a7d63p167e5djsn30f0b7f31935' }
    });

    //hacemos la peticion 
    const respuesta = await instance.get();

    //almacenamos la data en una variable
    const data = respuesta.data.Results[0];

    //verificamos si la peticion nos retorno algo
    if (data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }
    //se paso de promesa a async y await
    // instance.get()
    //     .then((respuesta) => {
    //         console.log(respuesta.data.Results[0]); //para poder trae el primer resultado eso se hace segun el retorno de la API
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    const direc = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    //lo que retornaremos
    return {
        direc,
        latitud,
        longitud
    }

}


//exportamos la funcion
module.exports = {
    getLugarLatLng
}