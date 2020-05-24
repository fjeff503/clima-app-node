//requires
const argv = require('./conf/yargs').argv;
const ciudad = require('./ciudad/ciudad');
const clima = require('./clima/clima');
const colors = require('colors');

let dir = argv.direccion;


const getInformacion = async(direccion) => {

    try {
        let dataCiudad = await ciudad.getCiudad(direccion);
        let dataClima = await clima.getClima(dataCiudad.latitud, dataCiudad.longitud);
        return (`El clima de ${dataCiudad.nombre.red} es de ${dataClima}C° centigrados`);
    } catch (error) {
        return (`No se pudo determinar el clima de ${direccion}`);
    }

}

getInformacion(dir).then(console.log).catch(console.log);