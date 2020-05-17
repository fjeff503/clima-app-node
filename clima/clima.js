const axios = require('axios');

const getClima = async(lat, lng) => { //hacemos async xq el axios devuelve una promesa
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6b0e31e9a4f10aae03843e0629ac2c40&units=metric`);
    return respuesta.data.main.temp; //traer unicamente la temperatura de la respuesta que me devuelve
}

module.exports = {
    getClima
}