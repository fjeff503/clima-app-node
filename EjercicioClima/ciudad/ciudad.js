//requires
const axios = require('axios');

//funcion para traer la ciudad
const getCiudad = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': 'a7eaf4e3e0mshe728097b85a7d63p167e5djsn30f0b7f31935' }
    });

    //hacemos la peticion
    const resp = await instance.get();

    //data
    const data = resp.data.Results[0];

    //error
    if (data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    //creamos un objeto con informacion que necesito nada mas
    let objeto = {
            nombre: data.name,
            longitud: data.lon,
            latitud: data.lat
        }
        //retornamos data
    return objeto;
}

//exportaciones
module.exports = {
    getCiudad
}