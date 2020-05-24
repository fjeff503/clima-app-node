//requires
const axios = require('axios');

//funcion para traer el clima 
const getClima = async(latitud, longitud) => {
    //creamos la instancia para pedir datos
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=6b0e31e9a4f10aae03843e0629ac2c40&units=metric`
    });

    //hacemos la peticion
    let respuesta = await instance.get();
    return (respuesta.data.main.temp);

}

module.exports = {
    getClima
}